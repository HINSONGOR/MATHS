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
  mult2:   { mode:'racing',  name:'雙位乘法遊戲', icon:'🏎️', gen: genMult2 },
  div2:    { mode:'racing',  name:'雙位除法遊戲', icon:'🏎️', gen: genDiv2 },
  percent: { mode:'racing',  name:'百份比遊戲',   icon:'🏎️', gen: genPercent },
};

let currentArcadeCat = null;

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

function startArcadeMusic(){
  stopArcadeMusic();
  if(!gs.sfx) return;
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
    score:0, lives:3, combo:0, speed:55,
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
    BS.score += gain;
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
    lane:1, gate:null, running:true, lastTime: performance.now(),
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
        RS.score += gain;
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

/* ── Resize handling ── */
window.addEventListener('resize', ()=>{
  if(BS && BS.canvas) fitArcadeCanvas(BS.canvas);
  if(RS && RS.canvas) fitArcadeCanvas(RS.canvas);
});
