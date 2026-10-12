// ===== Royal Invites — all backgrounds are procedurally animated (offline, export-safe) =====
const W=720,H=1280;
const FONTS=[["Aref Ruqaa","عارف رقعة"],["Amiri","أميري"],["Reem Kufi","ريم كوفي"],["Lateef","لطيف"],["Marhey","مرحي"],["Great Vibes","Great Vibes"],["Parisienne","Parisienne"],["Cinzel","Cinzel"],["Playfair Display","Playfair"],["Cormorant Garamond","Cormorant"],["Tajawal","تجوال"]];
const COLORS=["#f5e6b8","#d4af37","#e8c07d","#ffffff","#f3d1d1","#c9b27c","#b76e79"];
const rnd=(s=>()=>(s=(s*16807)%2147483647)/2147483647)(7);
function particles(n){return Array.from({length:n},()=>({x:rnd(),y:rnd(),r:rnd()*3+.5,s:rnd()*.5+.2,p:rnd()*6.28}))}
const P=particles(140);
const VIDS={};function vid(src,loop=false){const k=src+loop;if(!VIDS[k]){const v=document.createElement("video");v.src=src;v.muted=true;v.loop=loop;v.playsInline=true;v.preload="auto";v.play().catch(()=>{});VIDS[k]=v}return VIDS[k]}
const BG={
 palaceDoor(c,t){g(c,["#2a1d0c","#000"])},
 goldDust(c,t){g(c,["#1a1206","#050302"]);P.forEach(p=>{const y=(p.y-t*p.s*.05)%1;c.globalAlpha=.4+.6*Math.abs(Math.sin(t*2+p.p));dot(c,p.x*W,(y<0?y+1:y)*H,p.r,"#f5d77a")});c.globalAlpha=1},
 bokeh(c,t){g(c,["#2a0f14","#0a0405"]);P.slice(0,40).forEach(p=>{const x=(p.x*W+Math.sin(t*.3+p.p)*60),y=(p.y*H+Math.cos(t*.2+p.p)*80);const r=p.r*25;const gr=c.createRadialGradient(x,y,0,x,y,r);gr.addColorStop(0,"rgba(255,200,140,.35)");gr.addColorStop(1,"rgba(255,200,140,0)");c.fillStyle=gr;c.fillRect(x-r,y-r,r*2,r*2)})},
 petals(c,t){g(c,["#3b1f26","#140a0d"]);P.slice(0,60).forEach(p=>{const y=((p.y+t*p.s*.08)%1)*H,x=p.x*W+Math.sin(t+p.p)*40;c.save();c.translate(x,y);c.rotate(t*p.s+p.p);c.fillStyle="rgba(240,170,180,.75)";c.beginPath();c.ellipse(0,0,p.r*4,p.r*2,0,0,6.28);c.fill();c.restore()})},
 arabesque(c,t){g(c,["#0d1a17","#030807"]);c.strokeStyle="rgba(212,175,55,.35)";c.lineWidth=1.5;c.save();c.translate(W/2,H/2);c.rotate(t*.05);for(let k=0;k<3;k++){const R=180+k*120;for(let i=0;i<16;i++){c.rotate(Math.PI/8);c.beginPath();c.arc(R,0,R*.45,0,6.28);c.stroke()}}c.restore();frame(c)},
 marble(c,t){g(c,["#f2ede4","#d8cfc0"]);c.strokeStyle="rgba(150,130,100,.25)";for(let i=0;i<14;i++){c.beginPath();for(let x=0;x<=W;x+=20)c.lineTo(x,i*100+Math.sin(x/90+i+t*.4)*40);c.stroke()}frame(c,"#b8901f");gold(c,t)},
 night(c,t){g(c,["#06102a","#000"]);P.forEach(p=>{c.globalAlpha=.3+.7*Math.abs(Math.sin(t*1.5+p.p*3));dot(c,p.x*W,p.y*H*.8,p.r*.7,"#fff")});c.globalAlpha=1;dot(c,W*.75,200,60,"#f8f0d8");dot(c,W*.75-22,190,56,"#06102a")},
 silk(c,t){g(c,["#2b2216","#0e0a05"]);for(let i=0;i<9;i++){c.beginPath();c.moveTo(0,H);for(let x=0;x<=W;x+=12)c.lineTo(x,H*.15+i*110+Math.sin(x/140+t*.6+i*.5)*70);c.lineTo(W,H);c.fillStyle=`rgba(212,175,55,${.03+i*.012})`;c.fill()}gold(c,t)},
 candles(c,t){g(c,["#1c0d03","#000"]);for(let i=0;i<7;i++){const x=60+i*100,y=H-120-(i%2)*60,f=Math.sin(t*9+i)*3;const gr=c.createRadialGradient(x,y-40,0,x,y-40,120);gr.addColorStop(0,"rgba(255,170,60,.35)");gr.addColorStop(1,"transparent");c.fillStyle=gr;c.fillRect(x-120,y-160,240,240);c.fillStyle="#efe2c5";c.fillRect(x-12,y,24,200);c.fillStyle="#ffcf6a";c.beginPath();c.ellipse(x,y-18+f*.3,7,18+f,0,0,6.28);c.fill()}frame(c)},
 roseGold(c,t){g(c,["#3a2422","#120a09"]);c.save();c.translate(W/2,H/2);for(let i=0;i<12;i++){c.rotate(Math.PI/6+t*.01);c.strokeStyle="rgba(232,170,150,.25)";c.beginPath();c.moveTo(0,0);c.bezierCurveTo(200,-100,300,200,0,560);c.stroke()}c.restore();gold(c,t)},
 emerald(c,t){g(c,["#062b1f","#010a07"]);for(let i=0;i<5;i++){const r=200+i*60+Math.sin(t+i)*10;c.strokeStyle=`rgba(212,175,55,${.5-i*.08})`;c.lineWidth=2;c.beginPath();c.arc(W/2,H/2,r,0,6.28);c.stroke()}gold(c,t)}
};
function g(c,cols){const gr=c.createRadialGradient(W/2,H*.45,50,W/2,H/2,H*.8);gr.addColorStop(0,cols[0]);gr.addColorStop(1,cols[1]);c.fillStyle=gr;c.fillRect(0,0,W,H)}
function dot(c,x,y,r,col){c.fillStyle=col;c.beginPath();c.arc(x,y,r,0,6.28);c.fill()}
function frame(c,col="#d4af37"){c.strokeStyle=col;c.lineWidth=2;c.strokeRect(40,40,W-80,H-80);c.lineWidth=1;c.strokeRect(54,54,W-108,H-108)}
function gold(c,t){P.slice(0,50).forEach(p=>{c.globalAlpha=Math.abs(Math.sin(t+p.p));dot(c,p.x*W,((p.y-t*.01*p.s)%1+1)%1*H,p.r*.8,"#f5d77a")});c.globalAlpha=1}

const T=[
 {id:"palaceDoor",video:"videos/palace-door.mp4",delay:3.0,anim:"goldthread",ar:"باب القصر ✦ سينمائي",en:"Palace Door ✦ Cinematic",f1:"Aref Ruqaa",f2:"Amiri",c:"#f5e6b8"},
 {id:"palaceDoor",video:"videos/rose-garden.mp4",delay:3.0,anim:"petals",ar:"قوس الورد ✦ سينمائي",en:"Rose Arch ✦ Cinematic",f1:"Great Vibes",f2:"Amiri",c:"#fff3e6"},
 {id:"palaceDoor",video:"videos/ballroom.mp4",delay:3.0,anim:"goldthread",ar:"قاعة الثريا ✦ سينمائي",en:"Chandelier Ballroom ✦ Cinematic",f1:"Aref Ruqaa",f2:"Reem Kufi",c:"#f5e6b8"},
 {id:"palaceDoor",video:"videos/desert-oasis.mp4",delay:3.0,anim:"engrave",ar:"ليلة الواحة ✦ سينمائي",en:"Desert Oasis Night ✦ Cinematic",f1:"Reem Kufi",f2:"Amiri",c:"#ffd98a"},
 {id:"palaceDoor",video:"videos/marble-stairs.mp4",delay:3.0,anim:"engrave",ar:"درج الرخام ✦ سينمائي",en:"Marble Staircase ✦ Cinematic",f1:"Cinzel",f2:"Playfair Display",c:"#e9d29a"},
 {id:"goldDust",ar:"غبار الذهب",en:"Gold Dust",f1:"Aref Ruqaa",f2:"Amiri",c:"#f5e6b8",free:1},
 {id:"petals",ar:"بتلات الورد",en:"Rose Petals",f1:"Great Vibes",f2:"Cormorant Garamond",c:"#f3d1d1",free:1},
 {id:"night",ar:"ليلة القمر",en:"Moonlit Night",f1:"Aref Ruqaa",f2:"Reem Kufi",c:"#f5e6b8",free:1},
 {id:"marble",ar:"رخام ملكي",en:"Royal Marble",f1:"Cinzel",f2:"Playfair Display",c:"#8a6a1c",free:1},
 {id:"arabesque",ar:"أرابيسك",en:"Arabesque",f1:"Reem Kufi",f2:"Amiri",c:"#d4af37"},
 {id:"bokeh",ar:"أضواء الحفل",en:"Bokeh Lights",f1:"Parisienne",f2:"Cormorant Garamond",c:"#f5e6b8"},
 {id:"silk",ar:"حرير ذهبي",en:"Golden Silk",f1:"Aref Ruqaa",f2:"Amiri",c:"#f5e6b8"},
 {id:"candles",ar:"شموع",en:"Candlelight",f1:"Great Vibes",f2:"Playfair Display",c:"#ffe9b8"},
 {id:"roseGold",ar:"روز جولد",en:"Rose Gold",f1:"Marhey",f2:"Tajawal",c:"#f0c4b4"},
 {id:"emerald",ar:"زمرد",en:"Emerald Royale",f1:"Cinzel",f2:"Amiri",c:"#d4af37"}
];
let lang="ar";
const I18N={en:{brand:"Royal Invites",navT:"Templates",navP:"Pricing",kicker:"For the night of a lifetime",heroT:"Luxury Wedding Video Invitations",heroS:"Pick a template, type the names and date, and download a ready-to-share video in a minute.",cta:"Design your invitation",tT:"Choose your template",pT:"Plans",p1:"Free",p1a:"4 basic templates",p1b:"Watermarked export",p2:"Gold",p2a:"All premium templates",p2b:"No watermark + HD",p2c:"Background music",p3:"Royal",p3a:"Fully custom design",p3b:"RSVP page",pay:"💳 Pay with Binance Pay / USDT (TRC20) — coming soon",foot:"© Royal Invites — made with love",replay:"↻ Replay",export:"⬇ Export video",lIntro:"Opening line",lBride:"Bride",lGroom:"Groom",lDate:"Date",lVenue:"Venue",lMsg:"Message",lNameFont:"Names font",lBodyFont:"Body font",lColor:"Text color",lAnim:"Entrance animation",lDur:"Duration (sec)",lBg:"Own background video (optional)"}};
const AR={};document.querySelectorAll("[data-i18n]").forEach(e=>AR[e.dataset.i18n]=e.textContent);AR.lBg="فيديو خلفية خاص (اختياري)";
const DEF={ar:{intro:"بكل الحب ندعوكم لحضور حفل زفاف",bride:"ليلى",groom:"عمر",date:"الجمعة ٢٠ حزيران ٢٠٢٧",venue:"قصر الياسمين — دمشق",msg:"وجودكم يكمّل فرحتنا"},
 en:{intro:"Together with their families",bride:"Layla",groom:"Omar",date:"Friday, June 20, 2027",venue:"Jasmine Palace — Damascus",msg:"Your presence completes our joy"}};

// ---- Hero + gallery thumbnails ----
const hero=document.getElementById("heroCanvas"),hc=hero.getContext("2d");hero.width=W;hero.height=H;
const thumbs=[];
function buildGrid(){const grid=document.getElementById("grid");grid.innerHTML="";thumbs.length=0;
 T.forEach((t,i)=>{const d=document.createElement("div");d.className="card";const cv=document.createElement("canvas");cv.width=W/3;cv.height=H/3;
  d.append(cv);d.insertAdjacentHTML("beforeend",`<div class="meta"><b>${t[lang]}</b><span class="tag ${t.free?"":"pro"}">${t.free?(lang=="ar"?"مجاني":"Free"):"PRO"}</span></div>`);
  d.onclick=()=>openEditor(i);grid.append(d);thumbs.push({cv,t})})}
function drawInvite(c,t,s,time,dur,tv){BG[t.id](c,time);if(t.video&&!s.bgVideo){const v=tv||vid(t.video);if(v.readyState>=2){c.drawImage(v,0,0,W,H);const gr=c.createLinearGradient(0,0,0,H);gr.addColorStop(0,"rgba(0,0,0,.15)");gr.addColorStop(.5,`rgba(0,0,0,${Math.min(.55,Math.max(0,(time-3.5)*.3))})`);gr.addColorStop(1,"rgba(0,0,0,.4)");c.fillStyle=gr;c.fillRect(0,0,W,H)}}const D=s.delay||0;if(s.bgVideo&&s.bgVideo.readyState>=2){const v=s.bgVideo,r=Math.max(W/v.videoWidth,H/v.videoHeight);c.drawImage(v,(W-v.videoWidth*r)/2,(H-v.videoHeight*r)/2,v.videoWidth*r,v.videoHeight*r);c.fillStyle="rgba(0,0,0,.35)";c.fillRect(0,0,W,H)}
 const L=[[s.intro,s.f2,38,H*.30,0.4],[s.bride,s.f1,110,H*.42,1.2],["&",s.f1,70,H*.50,2.0],[s.groom,s.f1,110,H*.585,2.4],[s.date,s.f2,40,H*.70,3.4],[s.venue,s.f2,36,H*.75,4.0],[s.msg,s.f2,32,H*.84,4.8]];
 c.textAlign="center";c.textBaseline="middle";c.direction=/[\u0600-\u06FF]/.test(s.bride+s.intro)?"rtl":"ltr";
 L.forEach(([txt,font,size,y,start])=>{if(!txt)return;start+=D;const sp=["goldthread","petals","engrave"].includes(s.anim)?2.2:1.2;let p=Math.min(1,Math.max(0,(time-start)/sp));if(dur&&time>dur-.8)p=Math.min(p,(dur-time)/.8);p=p<0?0:p;const e=1-Math.pow(1-p,3);
  c.save();c.globalAlpha=e;let str=txt;
  if(s.anim=="rise")c.translate(0,(1-e)*60);if(s.anim=="zoom"){c.translate(W/2,y);c.scale(.6+.4*e,.6+.4*e);c.translate(-W/2,-y)}
  if(s.anim=="blur")c.filter=`blur(${(1-e)*12}px)`;if(s.anim=="type"){c.globalAlpha=p>0?1:0;str=[...txt].slice(0,Math.ceil([...txt].length*p)).join("")}
  c.font=`${size}px "${font}"`;c.shadowColor="rgba(0,0,0,.6)";c.shadowBlur=14;
  const gr=c.createLinearGradient(0,y-size/2,0,y+size/2);gr.addColorStop(0,"#fff");gr.addColorStop(.35,s.color);gr.addColorStop(1,s.color);c.fillStyle=size>60?gr:s.color;
  if(s.anim=="goldthread"&&p<1){c.globalAlpha=1;c.lineWidth=size>60?1.6:1;c.strokeStyle="#ffe7a0";c.shadowColor="#d4af37";c.shadowBlur=10;const L=size*[...txt].length;c.setLineDash([L*p,L]);c.strokeText(str,W/2,y,W-140);c.setLineDash([]);c.globalAlpha=Math.max(0,(p-.6)/.4);c.fillText(str,W/2,y,W-140);
   const tw=Math.min(c.measureText(str).width,W-140),sx=c.direction=="rtl"?W/2+tw/2-tw*p:W/2-tw/2+tw*p;c.globalAlpha=1;dot(c,sx,y,4,"#fff6d0");c.restore();return}
  if(s.anim=="petals"&&p<1){const tw=Math.min(c.measureText(str).width,W-140);c.globalAlpha=Math.max(0,(p-.55)/.45);c.fillText(str,W/2,y,W-140);c.globalAlpha=1;c.shadowBlur=0;
   for(let k=0;k<26;k++){const r1=P[(k*7+size)%P.length],r2=P[(k*13+3)%P.length];const tx=W/2-tw/2+r1.x*tw,ty=y+(r2.y-.5)*size*.6;const e2=Math.min(1,p*1.4);const q=1-Math.pow(1-e2,3);
    const x=(r2.x*W)*(1-q)+tx*q,yy=(r1.y*H*0.2-100)*(1-q)+ty*q;c.save();c.translate(x,yy);c.rotate((1-q)*6+r1.p);c.globalAlpha=1-Math.max(0,(p-.7)/.3);c.fillStyle=k%2?"#e8a0aa":"#f6c9cf";c.beginPath();c.ellipse(0,0,size*.09,size*.05,0,0,6.28);c.fill();c.restore()}c.restore();return}
  if(s.anim=="engrave"){c.globalAlpha=1;c.shadowBlur=0;const tw=Math.min(c.measureText(str).width,W-140)+40;c.save();c.beginPath();const cw=tw*Math.min(1,p*1.15);c.direction=="rtl"?c.rect(W/2+tw/2-cw,y-size,cw,size*2):c.rect(W/2-tw/2,y-size,cw,size*2);c.clip();
   c.fillStyle="rgba(0,0,0,.55)";c.fillText(str,W/2+2,y+2,W-140);c.fillStyle="rgba(255,255,255,.35)";c.fillText(str,W/2-1,y-1,W-140);c.fillStyle=s.color;c.globalAlpha=.85;c.fillText(str,W/2,y,W-140);c.restore();
   if(p<1){const sx=c.direction=="rtl"?W/2+tw/2-cw:W/2-tw/2+cw;for(let k=0;k<6;k++){const r=P[Math.abs(k*11+Math.floor(time*30))%P.length];dot(c,sx+(r.x-.5)*16,y+(r.y-.5)*size,1.5,"#fff2c0")}}c.restore();return}
  c.fillText(str,W/2,y,W-140);c.restore()});
 if(time>1+D){c.globalAlpha=Math.min(1,time-1-D);c.strokeStyle=s.color;c.lineWidth=1.5;c.beginPath();c.moveTo(W/2-120,H*.65);c.lineTo(W/2+120,H*.65);c.stroke();c.font='30px serif';c.fillStyle=s.color;c.fillText("✦",W/2,H*.65);c.globalAlpha=1}
 if(s.watermark){c.font="22px Tajawal";c.fillStyle="rgba(255,255,255,.35)";c.fillText("Royal Invites ✦",W/2,H-80)}}
function loop(ts){const t=ts/1000;BG.goldDust(hc,t);thumbs.forEach(({cv,t:tp})=>{const c=cv.getContext("2d");c.save();c.scale(1/3,1/3);const tv=tp.video?vid(tp.video,true):null;drawInvite(c,tp,{...DEF[lang],f1:tp.f1,f2:tp.f2,color:tp.c,anim:"fade",delay:tp.delay||0},tv?tv.currentTime+1.5:5+(t%6)*.1,0,tv);c.restore()});
 if(ed.open)renderEditor(t);requestAnimationFrame(loop)}

// ---- Editor ----
const $=id=>document.getElementById(id);const stage=$("stage"),sc=stage.getContext("2d");
const ed={open:false,start:0,state:{},tpl:null,recording:false};
["f1","f2"].forEach((k,j)=>FONTS.forEach(([f,n])=>$("f_font"+(j+1)).insertAdjacentHTML("beforeend",`<option value="${f}" style="font-family:'${f}'">${n}</option>`)));
COLORS.forEach(col=>{const i=document.createElement("i");i.style.background=col;i.onclick=()=>{ed.state.color=col;mark()};$("swatches").append(i)});
function mark(){[...$("swatches").children].forEach((i,k)=>i.classList.toggle("on",COLORS[k]==ed.state.color))}
$("f_dur").insertAdjacentHTML("afterend",`<label data-i18n="lBg">${lang=="ar"?AR.lBg:I18N.en.lBg}</label><input type="file" id="f_bg" accept="video/*">`);
const fields=["intro","bride","groom","date","venue","msg"];
function openEditor(i){const t=T[i];ed.tpl=t;ed.state={...DEF[lang],f1:t.f1,f2:t.f2,color:t.c,anim:t.anim||"fade",delay:t.delay||0,watermark:true,bgVideo:null};resetVid();
 fields.forEach(f=>$("f_"+f).value=ed.state[f]);$("f_font1").value=t.f1;$("f_font2").value=t.f2;$("f_anim").value=ed.state.anim;mark();$("edName").textContent=t[lang];
 $("editor").classList.remove("hidden");ed.open=true;ed.start=performance.now()/1000;document.body.style.overflow="hidden"}
fields.forEach(f=>$("f_"+f).oninput=e=>ed.state[f]=e.target.value);
$("f_font1").onchange=e=>ed.state.f1=e.target.value;$("f_font2").onchange=e=>ed.state.f2=e.target.value;
$("f_anim").onchange=e=>{ed.state.anim=e.target.value;ed.start=performance.now()/1000;resetVid()};
$("f_bg").onchange=e=>{const f=e.target.files[0];if(!f)return;const v=document.createElement("video");v.src=URL.createObjectURL(f);v.muted=true;v.loop=true;v.playsInline=true;v.play();ed.state.bgVideo=v};
function resetVid(){if(ed.tpl&&ed.tpl.video){const v=vid(ed.tpl.video);v.currentTime=0;v.play().catch(()=>{})}}
$("replay").onclick=()=>{ed.start=performance.now()/1000;resetVid()};
$("closeEd").onclick=()=>{if(ed.recording)return;ed.open=false;$("editor").classList.add("hidden");document.body.style.overflow=""};
function renderEditor(now){const dur=+$("f_dur").value;let t=now-ed.start;if(!ed.recording&&t>dur+1+(ed.state.delay||0)){ed.start=now;t=0;resetVid()}drawInvite(sc,ed.tpl,ed.state,t,ed.recording?dur+(ed.state.delay||0):0)}
$("exportBtn").onclick=async()=>{if(ed.recording)return;await document.fonts.ready;const dur=+$("f_dur").value;
 const types=["video/mp4;codecs=avc1","video/mp4","video/webm;codecs=vp9","video/webm"];const mime=types.find(m=>window.MediaRecorder&&MediaRecorder.isTypeSupported(m));
 if(!mime)return alert("المتصفح لا يدعم التصدير / Browser cannot record");
 const rec=new MediaRecorder(stage.captureStream(30),{mimeType:mime,videoBitsPerSecond:8e6});const chunks=[];rec.ondataavailable=e=>e.data.size&&chunks.push(e.data);
 rec.onstop=()=>{ed.recording=false;$("prog").classList.add("hidden");const ext=mime.includes("mp4")?"mp4":"webm";const a=document.createElement("a");a.href=URL.createObjectURL(new Blob(chunks,{type:mime}));a.download=`invitation-${ed.state.bride}-${ed.state.groom}.${ext}`;a.click()};
 ed.recording=true;ed.start=performance.now()/1000;resetVid();$("prog").classList.remove("hidden");rec.start(250);
 const iv=setInterval(()=>{const p=Math.min(1,(performance.now()/1000-ed.start)/(dur+(ed.state.delay||0)));$("prog").firstElementChild.style.width=p*100+"%";$("prog").lastElementChild.textContent=Math.round(p*100)+"%";if(p>=1){clearInterval(iv);rec.stop()}},100)};

// ---- Language ----
$("langBtn").onclick=()=>{lang=lang=="ar"?"en":"ar";document.documentElement.lang=lang;document.documentElement.dir=lang=="ar"?"rtl":"ltr";
 document.querySelectorAll("[data-i18n]").forEach(e=>e.textContent=(lang=="ar"?AR:I18N.en)[e.dataset.i18n]);$("langBtn").textContent=lang=="ar"?"English":"العربية";buildGrid()};
buildGrid();document.fonts.ready.then(()=>requestAnimationFrame(loop));
