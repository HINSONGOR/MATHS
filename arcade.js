/* ══════════════════════════════════════════════
   HINSON 數學深海王國 — 打機速算樂園 (Arcade Mode)
   氣球射擊模式 + 星星飛車模式
   Depends on globals from app.js: shuffle(), renderFrac(),
   playBeep(), getAudioCtx(), spawnParticles(), addXP(), addCoins(),
   showScreen(), gs
══════════════════════════════════════════════ */

/* ── Category definitions ── */
const ARCADE_CATS = {
  mult:    { mode:'balloon', name:'乘法遊戲',     icon:'🎈', gen: genMult },
  div:     { mode:'balloon', name:'除法遊戲',     icon:'🎈', gen: genDiv },
  dec:     { mode:'balloon', name:'小數互換遊戲', icon:'🎈', gen: genDec },
  addsub:  { mode:'balloon', name:'加減法遊戲',   icon:'🎈', gen: genAddSub },
  mult2:   { mode:'typing',  name:'雙位乘法遊戲', icon:'✏️', gen: genMult2 },
  div2:    { mode:'racing',  name:'雙位除法遊戲', icon:'🏎️', gen: genDiv2 },
  percent: { mode:'racing',  name:'百份比遊戲',   icon:'🏎️', gen: genPercent },
  sq:      { mode:'squares', name:'平方遊戲',     icon:'²',  gen: genSquares },
};

let currentArcadeCat = null;
let arcadeMuted = false;

/* ── Question generators ── */
function arRand(min, max){ return Math.floor(Math.random()*(max-min+1))+min; }
function arRound2(n){ return Math.round(n*100)/100; }

function genMult(){
  const a = arRand(2,12), b = arRand(2,12);
  return { text:`${a} × ${b} = ?`, answer: a*b };
}
function genDiv(){
  const b = arRand(2,12), c = arRand(2,12), a = b*c;
  return { text:`${a} ÷ ${b} = ?`, answer: c };
}
function genAddSub(){
  if(Math.random()<0.5){
    const a = arRand(10,999), b = arRand(10,999);
    return { text:`${a} + ${b} = ?`, answer: a+b };
  }
  let a = arRand(10,999), b = arRand(10,999);
  if(b>a) [a,b] = [b,a];
  return { text:`${a} − ${b} = ?`, answer: a-b };
}
function genDec(){
  const t = arRand(1,3);
  if(t===1){
    const d = arRound2(arRand(1,19)*0.05);
    return { text:`${d} = ?%`, answer: arRound2(d*100) };
  }
  if(t===2){
    const p = arRand(1,19)*5;
    return { text:`${p}% = ? (小數)`, answer: arRound2(p/100) };
  }
  const fracs = [[1,2],[1,4],[3,4],[1,5],[2,5],[3,5],[4,5],[1,10],[3,10],[7,10],[9,10]];
  const [n,dd] = fracs[arRand(0,fracs.length-1)];
  return { text:`<sup>${n}</sup>/<sub>${dd}</sub> = ? (小數)`, answer: arRound2(n/dd) };
}
function genMult2(){
  let a,b;
  if(Math.random()<0.7){ a = arRand(12,99); b = arRand(2,9); }
  else { a = arRand(11,30); b = arRand(11,30); }
  return { text:`${a} × ${b} = ?`, answer: a*b };
}
function genDiv2(){
  const b = arRand(2,9), c = arRand(11,99), a = b*c;
  return { text:`${a} ÷ ${b} = ?`, answer: c };
}
function genPercent(){
  const table = { 10:10, 20:5, 25:4, 50:2, 75:4, 5:20, 15:20, 30:10, 40:5, 60:5, 70:10, 80:5, 90:10 };
  const percents = Object.keys(table).map(Number);
  const p = percents[arRand(0,percents.length-1)];
  const mult = table[p];
  const base = mult * arRand(1,10);
  return { text:`${base} 嘅 ${p}% 係幾多？`, answer: arRound2(base*p/100) };
}
function genSquares(){
  const a = arRand(11,19);
  return { text:`${a} × ${a} = ?`, answer: a*a };
}

/* ── Distractor generation ── */
function genDistractors(answer, n){
  const isDecimal = !Number.isInteger(answer);
  const set = new Set([answer]);
  const rawDeltas = isDecimal
    ? [0.1,-0.1,0.2,-0.2,0.05,-0.05,1,-1,arRound2(answer*10-answer),arRound2(answer/10-answer)]
    : [1,-1,2,-2,3,-3,5,-5,10,-10,11,-11,Math.round(answer*0.1)||1,-(Math.round(answer*0.1)||1)];
  const deltas = shuffle(rawDeltas.slice());
  for(const d of deltas){
    if(set.size>=n) break;
    const v = isDecimal ? arRound2(answer+d) : Math.round(answer+d);
    if(v<=0 && answer>0) continue;
    if(!set.has(v)) set.add(v);
  }
  let guard=0;
  while(set.size<n && guard<80){
    guard++;
    const span = isDecimal ? (Math.random()*2) : (1+Math.floor(Math.random()*12));
    const v = isDecimal ? arRound2(answer + (Math.random()<0.5?-1:1)*span) : Math.round(answer + (Math.random()<0.5?-1:1)*span);
    if(v>0 && !set.has(v)) set.add(v);
  }
  return shuffle([...set]);
}

/* ── Best score persistence ── */
function getArcadeBest(){
  try{ return JSON.parse(localStorage.getItem('hinson_arcade_best')||'{}'); }catch(e){ return {}; }
}
function setArcadeBest(cat, score){
  const best = getArcadeBest();
  if(!best[cat] || score>best[cat]) best[cat]=score;
  try{ localStorage.setItem('hinson_arcade_best', JSON.stringify(best)); }catch(e){}
  return best[cat];
}
function refreshArcadeBest(){
  const best = getArcadeBest();
  Object.keys(ARCADE_CATS).forEach(k=>{
    const el = document.getElementById('ab-'+k);
    if(el) el.textContent = best[k]||0;
  });
  const ni=document.getElementById('hub-player-name');
  if(ni) ni.value=getPlayerName();
}

/* ── Leaderboard ── */
function getLB(){ try{ return JSON.parse(localStorage.getItem('hinson_arcade_lb')||'[]'); }catch(e){ return []; } }
function saveLBEntry(entry){
  const lb=getLB(); lb.push(entry);
  lb.sort((a,b)=>b.score-a.score);
  if(lb.length>100) lb.length=100;
  try{ localStorage.setItem('hinson_arcade_lb',JSON.stringify(lb)); }catch(e){}
}
function getPlayerName(){ return localStorage.getItem('hinson_arcade_name')||''; }
function setPlayerName(n){ localStorage.setItem('hinson_arcade_name',(n||'').trim().slice(0,16)||'玩家'); }
function fmtDate(){ const d=new Date(); return `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`; }
function escHtml(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
function showLeaderboard(){ renderLeaderboard(); showScreen('screen-arcade-lb'); }
function clearLeaderboard(){ if(!confirm('確定清除所有排行榜紀錄？')) return; localStorage.removeItem('hinson_arcade_lb'); renderLeaderboard(); }
function renderLeaderboard(){
  const lb=getLB();
  const tbody=document.getElementById('lb-tbody');
  if(!tbody) return;
  const ni=document.getElementById('lb-player-name');
  if(ni) ni.value=getPlayerName();
  if(!lb.length){
    tbody.innerHTML='<tr><td colspan="6" class="lb-empty">未有紀錄 — 快去玩一局！</td></tr>';
    return;
  }
  tbody.innerHTML=lb.map((e,i)=>{
    const rank=i===0?'🥇':i===1?'🥈':i===2?'🥉':'#'+(i+1);
    return `<tr class="${i<3?'lb-top':''}">
      <td class="lb-rank">${rank}</td>
      <td class="lb-name">${escHtml(e.name||'?')}</td>
      <td class="lb-score">${e.score}</td>
      <td class="lb-mode">${escHtml(e.catName||'-')}</td>
      <td class="lb-rounds">${e.rounds||0}</td>
      <td class="lb-date">${e.date}</td>
    </tr>`;
  }).join('');
}

/* ── Arcade background music ──
   Tries to play a local audio file (BGM_FILE) first — drop your own
   MP3 into the project folder with this filename to use it.
   Falls back to a procedural chiptune loop if the file is missing. */
const BGM_FILE = 'bgm.mp3';
let bgmAvailable = null; // null=unknown, true/false once probed
let arcadeMusicTimer = null;
let arcadeMusicStep = 0;
const ARCADE_MELODY = [523,659,784,659,523,392,440,523, 523,659,784,1047,784,659,523,440];

function toggleArcadeMusic(){
  arcadeMuted = !arcadeMuted;
  const btn = document.getElementById('arcade-mute-btn');
  if(btn) btn.textContent = arcadeMuted ? '🔇' : '🔊';
  if(arcadeMuted){ stopArcadeMusic(); }
  else if(BS||RS||TS){ startArcadeMusic(); }
}

function startArcadeMusic(){
  stopArcadeMusic();
  if(!gs.sfx || arcadeMuted) return;
  if(bgmAvailable === false){ startChiptuneLoop(); return; }
  const audio = document.getElementById('arcade-bgm');
  if(!audio){ startChiptuneLoop(); return; }
  if(!audio.getAttribute('src')) audio.src = BGM_FILE;
  audio.volume = 0.55;
  audio.currentTime = 0;
  audio.onerror = ()=>{ bgmAvailable = false; startChiptuneLoop(); };
  audio.oncanplay = ()=>{ bgmAvailable = true; };
  const p = audio.play();
  if(p && p.catch) p.catch(()=>{ bgmAvailable = false; startChiptuneLoop(); });
}
function startChiptuneLoop(){
  if(arcadeMusicTimer) return;
  arcadeMusicStep = 0;
  arcadeMusicTimer = setInterval(()=>{
    const note = ARCADE_MELODY[arcadeMusicStep % ARCADE_MELODY.length];
    playBeep(note, 0.12, 'square');
    arcadeMusicStep++;
  }, 220);
}
function stopArcadeMusic(){
  if(arcadeMusicTimer){ clearInterval(arcadeMusicTimer); arcadeMusicTimer=null; }
  const audio = document.getElementById('arcade-bgm');
  if(audio && !audio.paused){ audio.pause(); audio.currentTime = 0; }
}

/* ── Canvas sizing helper ── */
function fitArcadeCanvas(canvas){
  const rect = canvas.parentElement.getBoundingClientRect();
  canvas.width = Math.max(320, Math.floor(rect.width));
  canvas.height = Math.max(320, Math.floor(rect.height));
}

/* ════════════════════════════════════════════════
   HUB NAVIGATION
   ════════════════════════════════════════════════ */
function startArcade(cat){
  currentArcadeCat = cat;
  const def = ARCADE_CATS[cat];
  if(def.mode==='balloon'){
    showScreen('screen-balloon');
    document.getElementById('balloon-start-title').textContent = def.icon+' '+def.name;
    document.getElementById('balloon-start-overlay').classList.remove('hidden');
    document.getElementById('balloon-over-overlay').classList.add('hidden');
    document.getElementById('balloon-question').textContent = '準備開始…';
  } else if(def.mode==='typing'){
    showScreen('screen-typing');
    document.getElementById('typing-start-title').textContent = def.icon+' '+def.name;
    document.getElementById('typing-start-overlay').classList.remove('hidden');
    document.getElementById('typing-over-overlay').classList.add('hidden');
    document.getElementById('typing-play-area').style.display='none';
    document.getElementById('typing-question').textContent = '準備開始…';
  } else if(def.mode==='squares'){
    showScreen('screen-squares');
    document.getElementById('sq-start-overlay').classList.remove('hidden');
    document.getElementById('sq-over-overlay').classList.add('hidden');
    document.getElementById('sq-question').textContent = '準備開始…';
    document.getElementById('sq-display').textContent = '?';
  } else {
    showScreen('screen-racing');
    document.getElementById('racing-start-title').textContent = def.icon+' '+def.name;
    document.getElementById('racing-start-overlay').classList.remove('hidden');
    document.getElementById('racing-over-overlay').classList.add('hidden');
    document.getElementById('racing-question').textContent = '準備開始…';
  }
}
function exitArcade(){
  stopBalloonGame();
  stopRacingGame();
  stopTypingGame();
  stopSquaresGame();
  stopArcadeMusic();
  refreshArcadeBest();
  showScreen('screen-arcade-hub');
}

/* ════════════════════════════════════════════════
   BALLOON MODE
   ════════════════════════════════════════════════ */
let BS = null;

function livesHeartString(lives){
  return '❤️'.repeat(Math.max(0,lives)) + '🖤'.repeat(Math.max(0,3-lives));
}
function updateComboBadge(elId, combo){
  const el = document.getElementById(elId);
  if(!el) return;
  if(combo>=3){
    el.textContent = `🔥 連擊 x${combo}`;
    el.classList.remove('hidden');
  } else {
    el.classList.add('hidden');
  }
}

function beginBalloonRound(){
  document.getElementById('balloon-start-overlay').classList.add('hidden');
  document.getElementById('balloon-over-overlay').classList.add('hidden');
  const canvas = document.getElementById('balloon-canvas');
  fitArcadeCanvas(canvas);
  if(BS && BS.raf) cancelAnimationFrame(BS.raf);
  BS = {
    cat: currentArcadeCat, canvas, ctx: canvas.getContext('2d'),
    score:0, lives:3, combo:0, speed:55, correctCount:0, startTs:Date.now(),
    balloons:[], running:true, lastTime: performance.now(), shake:0
  };
  document.getElementById('balloon-score').textContent = '0';
  document.getElementById('balloon-lives').textContent = livesHeartString(3);
  updateComboBadge('balloon-combo-badge', 0);
  canvas.onpointerdown = onBalloonPointerDown;
  nextBalloonQuestion();
  startArcadeMusic();
  BS.raf = requestAnimationFrame(balloonLoop);
}
function stopBalloonGame(){
  if(BS){ BS.running=false; if(BS.raf) cancelAnimationFrame(BS.raf); BS=null; }
}

function nextBalloonQuestion(){
  const def = ARCADE_CATS[BS.cat];
  const q = def.gen();
  BS.correctAnswer = q.answer;
  document.getElementById('balloon-question').innerHTML = renderFrac(q.text);
  const w = BS.canvas.width;
  const count = w<480 ? 5 : (w<800 ? 6 : 7);
  const vals = genDistractors(q.answer, count);
  const n = vals.length;
  const r = Math.max(22, Math.min(32, w/(n*3.2)));
  BS.speed = Math.min(210, 55 + BS.score*5);
  BS.balloons = vals.map((v,i)=>{
    const colW = w/n;
    return {
      x: colW*i + colW/2 + (Math.random()*colW*0.3-colW*0.15),
      y: -60 - Math.random()*260,
      r, val:v, correct:(v===q.answer), vy: BS.speed,
      hue: 190 + i*28
    };
  });
}

function onBalloonPointerDown(e){
  if(!BS || !BS.running) return;
  const rect = BS.canvas.getBoundingClientRect();
  const x = (e.clientX-rect.left) * (BS.canvas.width/rect.width);
  const y = (e.clientY-rect.top) * (BS.canvas.height/rect.height);
  for(const b of BS.balloons){
    if(b.hit) continue;
    const dx=x-b.x, dy=y-b.y;
    if(dx*dx+dy*dy <= (b.r+10)*(b.r+10)){
      hitBalloon(b);
      break;
    }
  }
}

function hitBalloon(b){
  b.hit = true;
  if(b.correct){
    BS.combo++;
    updateComboBadge('balloon-combo-badge', BS.combo);
    const gain = 10 + Math.min(20, BS.combo*2);
    BS.correctCount++; BS.score += gain;
    document.getElementById('balloon-score').textContent = BS.score;
    if(gs.sfx) playBeep(880,0.12,'sine');
    spawnParticles(true);
    BS.balloons = BS.balloons.filter(x=>x!==b);
    setTimeout(()=>{ if(BS && BS.running) nextBalloonQuestion(); }, 260);
  } else {
    BS.combo = 0;
    loseBalloonLife();
    BS.balloons = BS.balloons.filter(x=>x!==b);
  }
}

function loseBalloonLife(){
  updateComboBadge('balloon-combo-badge', BS.combo);
  BS.lives--;
  BS.shake = 10;
  if(gs.sfx) playBeep(180,0.2,'sawtooth');
  spawnParticles(false);
  document.getElementById('balloon-lives').textContent = livesHeartString(BS.lives);
  if(BS.lives<=0){
    endBalloonGame();
  } else {
    BS.balloons = [];
    setTimeout(()=>{ if(BS && BS.running) nextBalloonQuestion(); }, 400);
  }
}

function endBalloonGame(){
  BS.running = false;
  stopArcadeMusic();
  if(gs.sfx){ playBeep(300,0.15,'square'); setTimeout(()=>playBeep(200,0.25,'square'),150); }
  const best = setArcadeBest(BS.cat, BS.score);
  saveLBEntry({name:getPlayerName()||'?',score:BS.score,catName:ARCADE_CATS[BS.cat].name,rounds:BS.correctCount||0,date:fmtDate()});
  if(typeof logSession==='function') logSession(ARCADE_CATS[BS.cat].name,ARCADE_CATS[BS.cat].icon,BS.correctCount,BS.correctCount,BS.startTs);
  const xpEarn = Math.round(BS.score*0.5);
  const coinEarn = Math.round(BS.score*0.25);
  addXP(xpEarn); addCoins(coinEarn); updateUI();
  document.getElementById('balloon-final-score').textContent = BS.score;
  document.getElementById('balloon-final-best').textContent = best;
  document.getElementById('balloon-final-reward').textContent = `+${xpEarn} XP  +${coinEarn} 🐚`;
  document.getElementById('balloon-over-overlay').classList.remove('hidden');
}

function drawSky(ctx,w,h){
  const g = ctx.createLinearGradient(0,0,0,h);
  g.addColorStop(0,'#0a2b52'); g.addColorStop(1,'#051428');
  ctx.fillStyle = g; ctx.fillRect(0,0,w,h);
}

function balloonLoop(t){
  if(!BS || !BS.running) return;
  const dt = Math.min(0.05, (t-BS.lastTime)/1000);
  BS.lastTime = t;
  const ctx = BS.ctx, w = BS.canvas.width, h = BS.canvas.height;
  ctx.save();
  if(BS.shake>0){
    ctx.translate((Math.random()-0.5)*BS.shake, (Math.random()-0.5)*BS.shake);
    BS.shake = Math.max(0, BS.shake-1);
  }
  drawSky(ctx,w,h);

  for(const b of BS.balloons){
    if(b.hit) continue;
    b.y += b.vy*dt;
  }
  const fellCorrect = BS.balloons.find(b=>!b.hit && b.y-b.r>h && b.correct);
  if(fellCorrect){
    fellCorrect.hit = true;
    BS.combo = 0;
    loseBalloonLife();
  }
  BS.balloons = BS.balloons.filter(b=>!b.hit && b.y-b.r<=h+20);

  for(const b of BS.balloons){
    ctx.beginPath();
    ctx.ellipse(b.x, b.y, b.r*0.85, b.r, 0,0,Math.PI*2);
    ctx.fillStyle = `hsl(${b.hue},80%,55%)`;
    ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,0.5)'; ctx.lineWidth=2; ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(b.x,b.y+b.r); ctx.lineTo(b.x,b.y+b.r+14);
    ctx.strokeStyle='rgba(255,255,255,0.6)'; ctx.stroke();
    ctx.fillStyle='#fff';
    ctx.font='bold 20px Segoe UI, sans-serif';
    ctx.textAlign='center'; ctx.textBaseline='middle';
    ctx.fillText(String(b.val), b.x, b.y-2);
  }

  ctx.font='38px serif'; ctx.textAlign='center'; ctx.textBaseline='alphabetic';
  ctx.fillText('🤿', w/2, h-14);

  ctx.restore();
  BS.raf = requestAnimationFrame(balloonLoop);
}

/* ════════════════════════════════════════════════
   RACING MODE
   ════════════════════════════════════════════════ */
let RS = null;
const LANE_COUNT = 3;

function beginRacingRound(){
  document.getElementById('racing-start-overlay').classList.add('hidden');
  document.getElementById('racing-over-overlay').classList.add('hidden');
  const canvas = document.getElementById('racing-canvas');
  fitArcadeCanvas(canvas);
  if(RS && RS.raf) cancelAnimationFrame(RS.raf);
  RS = {
    cat: currentArcadeCat, canvas, ctx: canvas.getContext('2d'),
    score:0, lives:3, combo:0, speed:110,
    lane:1, gate:null, running:true, lastTime: performance.now(), correctCount:0, startTs:Date.now(),
    roadOffset:0, shake:0
  };
  document.getElementById('racing-score').textContent = '0';
  document.getElementById('racing-lives').textContent = livesHeartString(3);
  updateComboBadge('racing-combo-badge', 0);
  window.addEventListener('keydown', onRacingKey);
  canvas.onpointerdown = onRacingPointerDown;
  nextRacingQuestion();
  startArcadeMusic();
  RS.raf = requestAnimationFrame(racingLoop);
}
function stopRacingGame(){
  if(RS){ RS.running=false; if(RS.raf) cancelAnimationFrame(RS.raf); RS=null; }
  window.removeEventListener('keydown', onRacingKey);
}
function onRacingKey(e){
  if(!RS || !RS.running) return;
  if(e.key==='ArrowLeft') moveLane(-1);
  else if(e.key==='ArrowRight') moveLane(1);
}
function onRacingPointerDown(e){
  if(!RS || !RS.running) return;
  const rect = RS.canvas.getBoundingClientRect();
  const x = (e.clientX-rect.left) * (RS.canvas.width/rect.width);
  const lane = Math.min(LANE_COUNT-1, Math.floor(x / (RS.canvas.width/LANE_COUNT)));
  RS.lane = lane;
}
function moveLane(dir){
  if(!RS || !RS.running) return;
  RS.lane = Math.max(0, Math.min(LANE_COUNT-1, RS.lane+dir));
}

function nextRacingQuestion(){
  const def = ARCADE_CATS[RS.cat];
  const q = def.gen();
  RS.correctAnswer = q.answer;
  document.getElementById('racing-question').innerHTML = renderFrac(q.text);
  const vals = genDistractors(q.answer, LANE_COUNT);
  const correctLane = vals.indexOf(q.answer);
  RS.speed = Math.min(420, 110 + RS.score*6);
  RS.gate = { y: -140, vals, correctLane, resolved:false };
}

function endRacingGame(){
  RS.running = false;
  stopArcadeMusic();
  if(gs.sfx){ playBeep(300,0.15,'square'); setTimeout(()=>playBeep(200,0.25,'square'),150); }
  const best = setArcadeBest(RS.cat, RS.score);
  saveLBEntry({name:getPlayerName()||'?',score:RS.score,catName:ARCADE_CATS[RS.cat].name,rounds:RS.correctCount||0,date:fmtDate()});
  if(typeof logSession==='function') logSession(ARCADE_CATS[RS.cat].name,ARCADE_CATS[RS.cat].icon,RS.correctCount,RS.correctCount,RS.startTs);
  const xpEarn = Math.round(RS.score*0.5);
  const coinEarn = Math.round(RS.score*0.25);
  addXP(xpEarn); addCoins(coinEarn); updateUI();
  document.getElementById('racing-final-score').textContent = RS.score;
  document.getElementById('racing-final-best').textContent = best;
  document.getElementById('racing-final-reward').textContent = `+${xpEarn} XP  +${coinEarn} 🐚`;
  document.getElementById('racing-over-overlay').classList.remove('hidden');
}

function racingLoop(t){
  if(!RS || !RS.running) return;
  const dt = Math.min(0.05, (t-RS.lastTime)/1000);
  RS.lastTime = t;
  const ctx = RS.ctx, w = RS.canvas.width, h = RS.canvas.height;
  const carY = h - 90;
  const laneW = w/LANE_COUNT;

  RS.roadOffset = (RS.roadOffset + RS.speed*dt) % 60;

  ctx.save();
  if(RS.shake>0){
    ctx.translate((Math.random()-0.5)*RS.shake, (Math.random()-0.5)*RS.shake);
    RS.shake = Math.max(0, RS.shake-1);
  }

  ctx.fillStyle = '#1b1f26'; ctx.fillRect(0,0,w,h);
  ctx.strokeStyle = 'rgba(255,255,255,0.4)'; ctx.lineWidth = 3; ctx.setLineDash([22,18]);
  for(let i=1;i<LANE_COUNT;i++){
    ctx.beginPath();
    ctx.moveTo(laneW*i, RS.roadOffset-60);
    ctx.lineTo(laneW*i, h);
    ctx.stroke();
  }
  ctx.setLineDash([]);

  if(RS.gate){
    const gate = RS.gate;
    gate.y += RS.speed*dt;
    for(let i=0;i<LANE_COUNT;i++){
      const cx = laneW*i + laneW/2;
      const isCorrect = i===gate.correctLane;
      ctx.beginPath();
      ctx.roundRect ? ctx.roundRect(cx-46, gate.y-26, 92, 52, 10) : ctx.rect(cx-46, gate.y-26, 92, 52);
      ctx.fillStyle = 'rgba(255,215,0,0.15)';
      ctx.fill();
      ctx.strokeStyle = '#ffd700'; ctx.lineWidth=2; ctx.stroke();
      ctx.fillStyle = '#fff';
      ctx.font = 'bold 24px Segoe UI, sans-serif';
      ctx.textAlign='center'; ctx.textBaseline='middle';
      ctx.fillText(String(gate.vals[i]), cx, gate.y);
      void isCorrect;
    }
    if(!gate.resolved && gate.y >= carY-10){
      gate.resolved = true;
      if(RS.lane === gate.correctLane){
        RS.combo++;
        updateComboBadge('racing-combo-badge', RS.combo);
        const gain = 10 + Math.min(20, RS.combo*2);
        RS.correctCount++; RS.score += gain;
        document.getElementById('racing-score').textContent = RS.score;
        if(gs.sfx) playBeep(880,0.12,'sine');
        spawnParticles(true);
      } else {
        RS.combo = 0;
        updateComboBadge('racing-combo-badge', RS.combo);
        RS.lives--;
        RS.shake = 12;
        if(gs.sfx) playBeep(180,0.2,'sawtooth');
        spawnParticles(false);
        document.getElementById('racing-lives').textContent = livesHeartString(RS.lives);
        if(RS.lives<=0){ ctx.restore(); endRacingGame(); return; }
      }
      setTimeout(()=>{ if(RS && RS.running) nextRacingQuestion(); }, 220);
      RS.gate = null;
    }
  }

  const carX = laneW*RS.lane + laneW/2;
  ctx.font = '40px serif'; ctx.textAlign='center'; ctx.textBaseline='middle';
  ctx.fillText('🏎️', carX, carY);

  ctx.restore();
  RS.raf = requestAnimationFrame(racingLoop);
}

/* ════════════════════════════════════════════════
   TYPING MODE
   ════════════════════════════════════════════════ */
let TS = null;
const TYPING_TIME = 12;

function beginTypingRound(){
  document.getElementById('typing-start-overlay').classList.add('hidden');
  document.getElementById('typing-over-overlay').classList.add('hidden');
  document.getElementById('typing-play-area').style.display='';
  TS = {
    cat:currentArcadeCat, score:0, lives:3, combo:0, correctCount:0, startTs:Date.now(),
    correctAnswer:0, timeLeft:TYPING_TIME, timerIv:null, running:true
  };
  document.getElementById('typing-score').textContent='0';
  document.getElementById('typing-lives').textContent=livesHeartString(3);
  updateComboBadge('typing-combo-badge',0);
  document.getElementById('typing-input').addEventListener('keydown', onTypingKey);
  startArcadeMusic();
  nextTypingQuestion();
}

function nextTypingQuestion(){
  const def = ARCADE_CATS[TS.cat];
  const q = def.gen();
  TS.correctAnswer = q.answer;
  TS.timeLeft = TYPING_TIME;
  document.getElementById('typing-question').innerHTML = renderFrac(q.text);
  document.getElementById('typing-input').value='';
  document.getElementById('typing-input').focus();
  const fb = document.getElementById('typing-feedback');
  fb.textContent=''; fb.className='typing-feedback';
  const fill = document.getElementById('typing-timer-fill');
  fill.style.transition='none'; fill.style.width='100%'; fill.className='typing-timer-fill';
  if(TS.timerIv) clearInterval(TS.timerIv);
  TS.timerIv = setInterval(()=>{
    TS.timeLeft -= 0.1;
    const pct = Math.max(0, TS.timeLeft/TYPING_TIME*100);
    fill.style.transition='width 0.1s linear';
    fill.style.width=pct+'%';
    if(pct<30) fill.className='typing-timer-fill danger';
    if(TS.timeLeft<=0){
      clearInterval(TS.timerIv);
      TS.combo=0; updateComboBadge('typing-combo-badge',0);
      TS.lives--;
      document.getElementById('typing-lives').textContent=livesHeartString(TS.lives);
      const fb2=document.getElementById('typing-feedback');
      fb2.textContent=`時間到！正確答案：${TS.correctAnswer}`; fb2.className='typing-feedback wrong';
      if(gs.sfx) playBeep(180,0.2,'sawtooth');
      spawnParticles(false);
      if(TS.lives<=0){ setTimeout(()=>endTypingGame(),800); }
      else{ setTimeout(()=>{ if(TS&&TS.running) nextTypingQuestion(); },900); }
    }
  },100);
}

function onTypingKey(e){ if(e.key==='Enter') submitTypingAnswer(); }

function submitTypingAnswer(){
  if(!TS||!TS.running) return;
  const val = parseFloat(document.getElementById('typing-input').value);
  if(isNaN(val)) return;
  clearInterval(TS.timerIv);
  const correct = Math.abs(val-TS.correctAnswer)<0.01;
  const fb = document.getElementById('typing-feedback');
  if(correct){
    TS.combo++;
    updateComboBadge('typing-combo-badge',TS.combo);
    const timeBonus = Math.floor(TS.timeLeft/TYPING_TIME*10);
    const gain = 10 + Math.min(20,TS.combo*2) + timeBonus;
    TS.correctCount++; TS.score += gain;
    document.getElementById('typing-score').textContent=TS.score;
    fb.textContent=`✓ 正確！+${gain} 分`; fb.className='typing-feedback';
    if(gs.sfx) playBeep(880,0.12,'sine');
    spawnParticles(true);
    setTimeout(()=>{ if(TS&&TS.running) nextTypingQuestion(); },600);
  } else {
    TS.combo=0; updateComboBadge('typing-combo-badge',0);
    TS.lives--;
    document.getElementById('typing-lives').textContent=livesHeartString(TS.lives);
    fb.textContent=`✗ 正確答案：${TS.correctAnswer}`; fb.className='typing-feedback wrong';
    if(gs.sfx) playBeep(180,0.2,'sawtooth');
    spawnParticles(false);
    if(TS.lives<=0){ setTimeout(()=>endTypingGame(),800); }
    else{ setTimeout(()=>{ if(TS&&TS.running) nextTypingQuestion(); },900); }
  }
}

function stopTypingGame(){
  if(TS){ if(TS.timerIv) clearInterval(TS.timerIv); TS.running=false; TS=null; }
  const inp=document.getElementById('typing-input');
  if(inp) inp.removeEventListener('keydown',onTypingKey);
}

function endTypingGame(){
  if(!TS) return;
  if(TS.timerIv) clearInterval(TS.timerIv);
  TS.running=false;
  stopArcadeMusic();
  if(gs.sfx){ playBeep(300,0.15,'square'); setTimeout(()=>playBeep(200,0.25,'square'),150); }
  const best=setArcadeBest(TS.cat,TS.score);
  saveLBEntry({name:getPlayerName()||'?',score:TS.score,catName:ARCADE_CATS[TS.cat].name,rounds:TS.correctCount||0,date:fmtDate()});
  if(typeof logSession==='function') logSession(ARCADE_CATS[TS.cat].name,ARCADE_CATS[TS.cat].icon,TS.correctCount,TS.correctCount,TS.startTs);
  const xpEarn=Math.round(TS.score*0.5);
  const coinEarn=Math.round(TS.score*0.25);
  addXP(xpEarn); addCoins(coinEarn); updateUI();
  document.getElementById('typing-final-score').textContent=TS.score;
  document.getElementById('typing-final-best').textContent=best;
  document.getElementById('typing-final-reward').textContent=`+${xpEarn} XP  +${coinEarn} 🐚`;
  document.getElementById('typing-play-area').style.display='none';
  document.getElementById('typing-over-overlay').classList.remove('hidden');
}

/* ════════════════════════════════════════════════
   SQUARES MODE (平方遊戲)
   ════════════════════════════════════════════════ */
let SQS = null;
const SQ_QUESTIONS = 12;
const SQ_TIME = 10;

function beginSquaresRound(){
  document.getElementById('sq-start-overlay').classList.add('hidden');
  document.getElementById('sq-over-overlay').classList.add('hidden');
  SQS = {
    cat:currentArcadeCat, score:0, combo:0, correct:0, total:0, startTs:Date.now(),
    qNum:0, correctAnswer:0, display:'', timeLeft:SQ_TIME, timerIv:null, running:true
  };
  document.getElementById('sq-score').textContent='0';
  document.getElementById('sq-combo').textContent='0';
  document.getElementById('sq-mult').textContent='×1.0';
  document.getElementById('sq-acc').textContent='100%';
  startArcadeMusic();
  nextSquaresQuestion();
}

function nextSquaresQuestion(){
  if(!SQS||!SQS.running) return;
  if(SQS.qNum>=SQ_QUESTIONS){ endSquaresGame(); return; }
  const q=ARCADE_CATS[SQS.cat].gen();
  SQS.correctAnswer=q.answer; SQS.display=''; SQS.timeLeft=SQ_TIME;
  document.getElementById('sq-question').textContent=q.text;
  document.getElementById('sq-display').textContent='?';
  document.getElementById('sq-counter').textContent=`${SQS.qNum+1} / ${SQ_QUESTIONS}`;
  const fill=document.getElementById('sq-bar-fill');
  if(fill){ fill.style.width='100%'; fill.className='sq-bar-fill'; }
  if(SQS.timerIv) clearInterval(SQS.timerIv);
  SQS.timerIv=setInterval(()=>{
    if(!SQS||!SQS.running){ clearInterval(SQS.timerIv); return; }
    SQS.timeLeft-=0.1;
    const pct=Math.max(0,SQS.timeLeft/SQ_TIME*100);
    const f=document.getElementById('sq-bar-fill');
    if(f){ f.style.width=pct+'%'; if(pct<30) f.className='sq-bar-fill danger'; }
    if(SQS.timeLeft<=0){
      clearInterval(SQS.timerIv);
      SQS.total++; SQS.combo=0;
      document.getElementById('sq-combo').textContent='0';
      document.getElementById('sq-mult').textContent='×1.0';
      updateSqAcc();
      if(gs.sfx) playBeep(180,0.2,'sawtooth');
      SQS.qNum++;
      setTimeout(()=>{ if(SQS&&SQS.running) nextSquaresQuestion(); },600);
    }
  },100);
}

function sqPadPress(d){
  if(!SQS||!SQS.running) return;
  if(SQS.display.length>=5) return;
  SQS.display+=d;
  document.getElementById('sq-display').textContent=SQS.display;
}
function sqPadBack(){
  if(!SQS||!SQS.running) return;
  SQS.display=SQS.display.slice(0,-1);
  document.getElementById('sq-display').textContent=SQS.display||'?';
}

function submitSquaresAnswer(){
  if(!SQS||!SQS.running||!SQS.display) return;
  clearInterval(SQS.timerIv);
  const val=parseInt(SQS.display,10);
  SQS.total++;
  if(val===SQS.correctAnswer){
    SQS.correct++; SQS.combo++;
    const mult=1+Math.min(SQS.combo-1,4)*0.5;
    const gain=Math.round(10*mult);
    SQS.score+=gain;
    document.getElementById('sq-score').textContent=SQS.score;
    document.getElementById('sq-combo').textContent=SQS.combo;
    document.getElementById('sq-mult').textContent='×'+mult.toFixed(1);
    if(gs.sfx) playBeep(880,0.12,'sine');
    spawnParticles(true);
  } else {
    SQS.combo=0;
    document.getElementById('sq-combo').textContent='0';
    document.getElementById('sq-mult').textContent='×1.0';
    if(gs.sfx) playBeep(180,0.2,'sawtooth');
    spawnParticles(false);
  }
  updateSqAcc(); SQS.qNum++;
  setTimeout(()=>{ if(SQS&&SQS.running) nextSquaresQuestion(); },300);
}

function updateSqAcc(){
  const pct=SQS.total>0?Math.round(SQS.correct/SQS.total*100):100;
  document.getElementById('sq-acc').textContent=pct+'%';
}

function stopSquaresGame(){
  if(SQS){ if(SQS.timerIv) clearInterval(SQS.timerIv); SQS.running=false; SQS=null; }
}

function endSquaresGame(){
  if(!SQS) return;
  if(SQS.timerIv) clearInterval(SQS.timerIv);
  SQS.running=false;
  stopArcadeMusic();
  if(gs.sfx){ playBeep(300,0.15,'square'); setTimeout(()=>playBeep(200,0.25,'square'),150); }
  const best=setArcadeBest(SQS.cat,SQS.score);
  saveLBEntry({name:getPlayerName()||'?',score:SQS.score,catName:ARCADE_CATS[SQS.cat].name,rounds:SQS.correct,date:fmtDate()});
  if(typeof logSession==='function') logSession(ARCADE_CATS[SQS.cat].name,ARCADE_CATS[SQS.cat].icon,SQS.correct,SQS.correct,SQS.startTs);
  const xpEarn=Math.round(SQS.score*0.5);
  const coinEarn=Math.round(SQS.score*0.25);
  addXP(xpEarn); addCoins(coinEarn); updateUI();
  const acc=SQS.total>0?Math.round(SQS.correct/SQS.total*100):100;
  document.getElementById('sq-final-score').textContent=SQS.score;
  document.getElementById('sq-final-best').textContent=best;
  document.getElementById('sq-final-acc').textContent=`正確率：${acc}%（${SQS.correct}/${SQS.total}）`;
  document.getElementById('sq-final-reward').textContent=`+${xpEarn} XP  +${coinEarn} 🐚`;
  document.getElementById('sq-over-overlay').classList.remove('hidden');
}

/* ── Resize handling ── */
window.addEventListener('resize', ()=>{
  if(BS && BS.canvas) fitArcadeCanvas(BS.canvas);
  if(RS && RS.canvas) fitArcadeCanvas(RS.canvas);
});
