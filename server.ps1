$root = 'C:\HINSON MATHS'
$mime = @{
    '.html' = 'text/html; charset=utf-8'
    '.css'  = 'text/css; charset=utf-8'
    '.js'   = 'application/javascript; charset=utf-8'
    '.mp3'  = 'audio/mpeg'
    '.png'  = 'image/png'
    '.jpg'  = 'image/jpeg'
    '.svg'  = 'image/svg+xml'
    '.ico'  = 'image/x-icon'
    '.json' = 'application/json'
    '.webmanifest' = 'application/manifest+json'
}

$l = [System.Net.HttpListener]::new()
$l.Prefixes.Add('http://localhost:3378/')
$l.Start()
Write-Host 'Server running on http://localhost:3378/'

while ($l.IsListening) {
    $ctx = $l.GetContext()
    try {
        $p = $ctx.Request.Url.LocalPath.TrimStart('/')
        if (-not $p) { $p = 'index.html' }
        $f = Join-Path $root $p

        if (Test-Path $f -PathType Leaf) {
            $b   = [System.IO.File]::ReadAllBytes($f)
            $ext = [System.IO.Path]::GetExtension($f).ToLower()
            $ctx.Response.StatusCode   = 200
            $ctx.Response.ContentType  = if ($mime[$ext]) { $mime[$ext] } else { 'application/octet-stream' }
            $ctx.Response.AddHeader('Cache-Control', 'no-store, no-cache, must-revalidate')
            $ctx.Response.ContentLength64 = $b.LongLength
            $ctx.Response.OutputStream.Write($b, 0, $b.Length)
        } else {
            $b = [System.Text.Encoding]::UTF8.GetBytes('Not Found')
            $ctx.Response.StatusCode      = 404
            $ctx.Response.ContentLength64 = $b.LongLength
            $ctx.Response.OutputStream.Write($b, 0, $b.Length)
        }
    } catch {
        Write-Host "Req error: $_"
    } finally {
        try { $ctx.Response.Close() } catch {}
    }
}
