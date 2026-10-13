"use strict";
// ===== Royal Invites — دعوة ملكية =====
// Owner config (Sham Cash details reused from the owner's other projects: one-million-humans / planet-novel)
const CONFIG={price:{ar:"5 دولار",en:"5 USD"},shamName:"عبد الهادي محمد خيال",shamAccount:"e1d3c4f1e0f1215b676dceb9dc9bca08",receiptEmail:"abed.khayyal97@gmail.com"};
const W=720,H=1280;
const FONTS=[["Aref Ruqaa","عارف رقعة"],["Amiri","أميري"],["Reem Kufi","ريم كوفي"],["Lateef","لطيف"],["Marhey","مرحي"],["Great Vibes","Great Vibes"],["Parisienne","Parisienne"],["Cinzel","Cinzel"],["Playfair Display","Playfair"],["Cormorant Garamond","Cormorant"],["Tajawal","تجوال"]];
const COLORS=["#f5e6b8","#d4af37","#e8c07d","#ffffff","#f3d1d1","#c9b27c","#b76e79"];
const rnd=(s=>()=>(s=(s*16807)%2147483647)/2147483647)(7);
function particles(n){return Array.from({length:n},()=>({x:rnd(),y:rnd(),r:rnd()*3+.5,s:rnd()*.5+.2,p:rnd()*6.28}))}
const P=particles(140);
const BG={
 cine(c,t){g(c,["#2a1d0c","#000"])},
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
const VIDS={};function vid(src){if(!VIDS[src]){const v=document.createElement("video");v.muted=true;v.playsInline=true;v.setAttribute("playsinline","");v.preload="auto";v.src=src;VIDS[src]=v}return VIDS[src]}
const T=[
 {id:"cine",slug:"palace-door",delay:3,anim:"goldthread",ar:"باب القصر",en:"Palace Door",f1:"Aref Ruqaa",f2:"Amiri",c:"#f5e6b8"},
 {id:"cine",slug:"rose-garden",delay:3,anim:"petals",ar:"قوس الورد",en:"Rose Arch",f1:"Great Vibes",f2:"Amiri",c:"#fff3e6"},
 {id:"cine",slug:"ballroom",delay:3,anim:"goldthread",ar:"قاعة الثريا",en:"Chandelier Ballroom",f1:"Aref Ruqaa",f2:"Reem Kufi",c:"#f5e6b8"},
 {id:"cine",slug:"desert-oasis",delay:3,anim:"engrave",ar:"ليلة الواحة",en:"Desert Oasis",f1:"Reem Kufi",f2:"Amiri",c:"#ffd98a"},
 {id:"cine",slug:"marble-stairs",delay:3,anim:"engrave",ar:"درج الرخام",en:"Marble Staircase",f1:"Cinzel",f2:"Playfair Display",c:"#e9d29a"},
 {id:"goldDust",ar:"غبار الذهب",en:"Gold Dust",f1:"Aref Ruqaa",f2:"Amiri",c:"#f5e6b8"},
 {id:"petals",ar:"بتلات الورد",en:"Rose Petals",f1:"Great Vibes",f2:"Cormorant Garamond",c:"#f3d1d1"},
 {id:"night",ar:"ليلة القمر",en:"Moonlit Night",f1:"Aref Ruqaa",f2:"Reem Kufi",c:"#f5e6b8"},
 {id:"marble",ar:"رخام ملكي",en:"Royal Marble",f1:"Cinzel",f2:"Playfair Display",c:"#8a6a1c"},
 {id:"arabesque",ar:"أرابيسك",en:"Arabesque",f1:"Reem Kufi",f2:"Amiri",c:"#d4af37"},
 {id:"bokeh",ar:"أضواء الحفل",en:"Bokeh Lights",f1:"Parisienne",f2:"Cormorant Garamond",c:"#f5e6b8"},
 {id:"silk",ar:"حرير ذهبي",en:"Golden Silk",f1:"Aref Ruqaa",f2:"Amiri",c:"#f5e6b8"},
 {id:"candles",ar:"شموع",en:"Candlelight",f1:"Great Vibes",f2:"Playfair Display",c:"#ffe9b8"},
 {id:"roseGold",ar:"روز جولد",en:"Rose Gold",f1:"Marhey",f2:"Tajawal",c:"#f0c4b4"},
 {id:"emerald",ar:"زمرد",en:"Emerald Royale",f1:"Cinzel",f2:"Amiri",c:"#d4af37"}
];
T.forEach(t=>{if(t.slug){t.video="videos/web/"+t.slug+".mp4";t.loop="videos/loop/"+t.slug+".mp4";t.poster="img/"+t.slug+".webp"}});
const ANIMS=[["fade","✦ تلاشي","✦ Fade"],["rise","↑ صعود","↑ Rise"],["zoom","تكبير","Zoom"],["blur","ضباب","Blur"],["type","آلة كاتبة","Typewriter"],["goldthread","خيط ذهبي","Gold thread"],["petals","بتلات الورد","Rose petals"],["engrave","نقش على الرخام","Marble engraving"]];
const I18N={ar:{},en:{brand:"Royal Invites",navT:"Templates",kicker:"For the night of a lifetime",heroT:"Luxury Wedding Video Invitations",heroS:"Pick a template, type the names and date, and get a golden video invitation ready to share in a minute.",cta:"Design your invitation",tT:"Choose your template",tHint:"Hover or tap a template to preview it, then click to edit",foot:"© Royal Invites — made with love",replay:"↻ Replay",export:"⬇ Export invitation",lIntro:"Opening line",lBride:"Bride",lGroom:"Groom",lDate:"Date",lVenue:"Venue",lMsg:"Message",lNameFont:"Names font",lBodyFont:"Body font",lColor:"Text color",lAnim:"Text entrance",lDur:"Text duration (sec)",lBg:"Your own background video (optional)",
 payT:"Your golden invitation is ready",payS:"To export your invitation in high quality without a watermark, pay with Sham Cash.",payAmt:"Amount",payCur:"Payment is accepted in Syrian pounds or US dollars.",sham:"Sham Cash",copy:"Copy account code",s1:"Open Sham Cash and scan the QR, or paste the account code.",s2:"Send the amount in US dollars or Syrian pounds.",s3:"Send a photo of the transfer receipt with your order number:",sendR:"✉ Send the receipt photo",s4:"After we review the receipt we send you an unlock code. Enter it here to export your invitation.",unlock:"Unlock",
 copied:"Copied",okU:"Unlocked ✦ exporting your invitation…",badU:"Invalid code. Check it and try again.",cine:"Cinematic",anim:"Animated",noRec:"Your browser can't record video. Please use Chrome, Edge or Safari 14.1+.",done:"Your invitation has been downloaded ✦",wm:"Preview · Royal Invites",mailS:"Royal Invites – Sham Cash receipt",mailB:"Hello,\nAttached is the Sham Cash transfer receipt.\nOrder number: {id}\nNames: {n}\n"}};
const AR_EXTRA={copied:"تم النسخ",okU:"تم التفعيل ✦ جاري تصدير دعوتك…",badU:"رمز غير صحيح، تأكد منه وحاول مجدداً.",cine:"سينمائي",anim:"متحرك",noRec:"المتصفح لا يدعم تسجيل الفيديو. استخدم Chrome أو Edge أو Safari 14.1+.",done:"تم تنزيل دعوتك ✦",wm:"معاينة · دعوة ملكية",mailS:"دعوة ملكية – إشعار شام كاش",mailB:"مرحباً،\nمرفق صورة إشعار حوالة شام كاش.\nرقم الطلب: {id}\nالأسماء: {n}\n"};
document.querySelectorAll("[data-i18n]").forEach(e=>I18N.ar[e.dataset.i18n]=e.textContent);Object.assign(I18N.ar,AR_EXTRA);
let lang=localStorage.getItem("ri_lang")==="en"?"en":"ar";
const tr=k=>I18N[lang][k]||I18N.ar[k]||k;
const DEF={ar:{intro:"بكل الحب ندعوكم لحضور حفل زفاف",bride:"ليلى",groom:"عمر",date:"الجمعة ٢٠ حزيران ٢٠٢٧",venue:"قصر الياسمين — دمشق",msg:"وجودكم يكمّل فرحتنا"},
 en:{intro:"Together with their families",bride:"Layla",groom:"Omar",date:"Friday, June 20, 2027",venue:"Jasmine Palace — Damascus",msg:"Your presence completes our joy"}};
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
 if(s.watermark){c.font="26px Tajawal";c.fillStyle="rgba(255,255,255,.5)";c.fillText(tr("wm"),W/2,H-80)}}
const $=id=>document.getElementById(id);
function toast(m){const t=$("toast");t.textContent=m;t.classList.add("on");clearTimeout(toast.h);toast.h=setTimeout(()=>t.classList.remove("on"),2600)}

// ---- Fonts: page fonts load async; editor fonts load on first editor open ----
const FONT_URL="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Aref+Ruqaa:wght@400;700&family=Reem+Kufi:wght@400;700&family=Lateef&family=Marhey:wght@400;700&family=Great+Vibes&family=Cinzel:wght@400;700&family=Playfair+Display&family=Parisienne&family=Cormorant+Garamond:wght@400;600&family=Tajawal:wght@400;500&display=swap";
let fontsLink=null;
function loadEditorFonts(){if(!fontsLink){fontsLink=document.createElement("link");fontsLink.rel="stylesheet";fontsLink.href=FONT_URL;document.head.append(fontsLink)}}
function ensureFonts(list){return Promise.all(list.map(f=>document.fonts.load(`40px "${f}"`,"ابج Abc").catch(()=>{}))).then(()=>document.fonts.ready)}

// ---- Gallery: static posters, preview only on hover/tap ----
const grid=$("grid");let thumbsDrawn=false;
function stateFor(t){return {...DEF[lang],f1:t.f1,f2:t.f2,color:t.c,anim:"fade",delay:0,watermark:false}}
function buildGrid(){grid.innerHTML="";
 T.forEach((t,i)=>{const b=document.createElement("button");b.type="button";b.className="card";b.setAttribute("aria-label",t[lang]);
  const th=document.createElement("div");th.className="thumb";
  if(t.video){th.innerHTML=`<img src="${t.poster}" alt="" width="360" height="640" loading="${i<4?"eager":"lazy"}" decoding="async"><video muted loop playsinline preload="none"></video><div class="ov"><i>${DEF[lang].intro}</i><b>${DEF[lang].bride} & ${DEF[lang].groom}</b><i>${DEF[lang].date}</i></div>`;
   const v=th.querySelector("video");const play=()=>{if(!v.src)v.src=t.loop;b.classList.add("playing");v.play().catch(()=>{})};const stop=()=>{b.classList.remove("playing");v.pause()};
   b.addEventListener("mouseenter",play);b.addEventListener("mouseleave",stop);b.addEventListener("focus",play);b.addEventListener("blur",stop);
  }else{const cv=document.createElement("canvas");cv.width=240;cv.height=427;th.append(cv);t._cv=cv;let raf=0;
   const anim=ts=>{drawThumb(t,4+ts/1000%6);raf=requestAnimationFrame(anim)};
   b.addEventListener("mouseenter",()=>{cancelAnimationFrame(raf);raf=requestAnimationFrame(anim)});b.addEventListener("mouseleave",()=>{cancelAnimationFrame(raf);drawThumb(t,7)})}
  b.append(th);b.insertAdjacentHTML("beforeend",`<div class="meta"><b>${t[lang]}</b><span class="tag ${t.video?"cine":""}">${t.video?tr("cine"):tr("anim")}</span></div>`);
  b.addEventListener("click",()=>openEditor(i));grid.append(b)});
 if(thumbsDrawn)drawThumbs()}
function drawThumb(t,time){const c=t._cv.getContext("2d");c.setTransform(1/3,0,0,1/3,0,0);drawInvite(c,t,stateFor(t),time,0)}
// draw canvas thumbnails when gallery scrolls near (keeps first paint light)
function drawThumbs(){const list=T.filter(t=>t._cv);let k=0;const step=()=>{if(k<list.length){drawThumb(list[k++],7);requestAnimationFrame(step)}};requestAnimationFrame(step)}
// draw canvas thumbnails only once the gallery is actually visible, one per frame, after fonts load
new IntersectionObserver((es,o)=>{if(es.some(e=>e.isIntersecting)){o.disconnect();loadEditorFonts();ensureFonts(["Aref Ruqaa","Amiri","Great Vibes","Cinzel","Reem Kufi","Playfair Display","Cormorant Garamond","Parisienne","Marhey"]).then(()=>{thumbsDrawn=true;drawThumbs()})}},{rootMargin:"0px 0px 100px 0px"}).observe(grid);
// touch: first tap previews, play handled by click->open; long hover not available, so preview on touchstart
grid.addEventListener("touchstart",e=>{const b=e.target.closest(".card");if(b)b.dispatchEvent(new Event("mouseenter"))},{passive:true});

// ---- Editor ----
const stage=$("stage"),sc=stage.getContext("2d");
const ed={open:false,start:0,state:{},tpl:null,recording:false,raf:0};
function fillSelects(){for(const id of ["f_font1","f_font2"]){const s=$(id),v=s.value;s.innerHTML=FONTS.map(([f,n])=>`<option value="${f}">${lang=="ar"?n:f}</option>`).join("");if(v)s.value=v}
 const a=$("f_anim"),av=a.value;a.innerHTML=ANIMS.map(([k,ar,en])=>`<option value="${k}">${lang=="ar"?ar:en}</option>`).join("");if(av)a.value=av}
fillSelects();
COLORS.forEach(col=>{const b=document.createElement("button");b.type="button";b.style.background=col;b.setAttribute("role","radio");b.setAttribute("aria-label",col);b.onclick=()=>{ed.state.color=col;mark()};$("swatches").append(b)});
function mark(){[...$("swatches").children].forEach((b,k)=>b.setAttribute("aria-checked",COLORS[k]==ed.state.color))}
const fields=["intro","bride","groom","date","venue","msg"];
const unlocked=()=>{const c=localStorage.getItem("ri_code");return !!(c&&window.RI_UNLOCKED_OK)};
function openEditor(i){const t=T[i];ed.tpl=t;loadEditorFonts();
 ed.state={...DEF[lang],f1:t.f1,f2:t.f2,color:t.c,anim:t.anim||"fade",delay:t.delay||0,watermark:!unlocked(),bgVideo:null};
 fields.forEach(f=>$("f_"+f).value=ed.state[f]);$("f_font1").value=t.f1;$("f_font2").value=t.f2;$("f_anim").value=ed.state.anim;$("f_bg").value="";mark();$("edName").textContent=t[lang];
 $("editor").classList.remove("hidden");document.body.style.overflow="hidden";ed.open=true;restart();
 cancelAnimationFrame(ed.raf);const loop=ts=>{if(!ed.open)return;renderEditor(ts/1000);ed.raf=requestAnimationFrame(loop)};ed.raf=requestAnimationFrame(loop);
 ensureFonts([t.f1,t.f2])}
function closeEditor(){if(ed.recording)return;ed.open=false;cancelAnimationFrame(ed.raf);$("editor").classList.add("hidden");document.body.style.overflow="";if(ed.tpl&&ed.tpl.video)vid(ed.tpl.video).pause();if(ed.state.bgVideo)ed.state.bgVideo.pause()}
function restart(){ed.start=performance.now()/1000;const v=ed.state.bgVideo||(ed.tpl.video&&vid(ed.tpl.video));if(v){try{v.currentTime=0}catch(e){}v.play().catch(()=>{})}}
fields.forEach(f=>$("f_"+f).addEventListener("input",e=>ed.state[f]=e.target.value));
$("f_font1").onchange=e=>{ed.state.f1=e.target.value;ensureFonts([ed.state.f1])};$("f_font2").onchange=e=>{ed.state.f2=e.target.value;ensureFonts([ed.state.f2])};
$("f_anim").onchange=e=>{ed.state.anim=e.target.value;restart()};
$("f_dur").oninput=e=>{$("durVal").textContent=e.target.value};
$("f_bg").onchange=e=>{const f=e.target.files[0];if(!f)return;const v=document.createElement("video");v.muted=true;v.loop=true;v.playsInline=true;v.src=URL.createObjectURL(f);ed.state.bgVideo=v;restart()};
$("replay").onclick=restart;$("closeEd").onclick=closeEditor;
document.addEventListener("keydown",e=>{if(e.key==="Escape"){if(!$("pay").classList.contains("hidden"))closePay();else if(ed.open)closeEditor()}});
document.addEventListener("visibilitychange",()=>{const v=ed.tpl&&ed.tpl.video&&VIDS[ed.tpl.video];if(document.hidden&&v&&!ed.recording)v.pause()});
function total(){return +$("f_dur").value+(ed.state.delay||0)}
function renderEditor(now){let t=now-ed.start;if(!ed.recording&&t>total()+1.5){restart();t=0}drawInvite(sc,ed.tpl,ed.state,t,ed.recording?total():0)}

// ---- Export (requires Sham Cash unlock) ----
$("exportBtn").onclick=()=>{if(ed.recording)return;if(unlocked())doExport();else openPay()};
async function doExport(){
 const types=["video/mp4;codecs=avc1.42E01E","video/mp4;codecs=avc1","video/mp4","video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm"];
 const mime=window.MediaRecorder&&stage.captureStream?types.find(m=>MediaRecorder.isTypeSupported(m)):null;
 if(!mime){alert(tr("noRec"));return}
 const btn=$("exportBtn");btn.disabled=true;ed.state.watermark=false;
 await ensureFonts([ed.state.f1,ed.state.f2]);
 const v=ed.state.bgVideo||(ed.tpl.video&&vid(ed.tpl.video));
 if(v&&v.readyState<3)await new Promise(r=>{v.addEventListener("canplaythrough",r,{once:true});setTimeout(r,8000)});
 let rec;try{rec=new MediaRecorder(stage.captureStream(30),{mimeType:mime,videoBitsPerSecond:6e6})}catch(e){btn.disabled=false;alert(tr("noRec"));return}
 const chunks=[];rec.ondataavailable=e=>e.data&&e.data.size&&chunks.push(e.data);
 rec.onstop=()=>{ed.recording=false;btn.disabled=false;$("prog").classList.add("hidden");const ext=mime.includes("mp4")?"mp4":"webm";
  const url=URL.createObjectURL(new Blob(chunks,{type:mime.split(";")[0]}));const a=document.createElement("a");a.href=url;a.download=`invitation-${(ed.state.bride||"bride").trim()}-${(ed.state.groom||"groom").trim()}.${ext}`;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),60000);toast(tr("done"))};
 ed.recording=true;restart();$("prog").classList.remove("hidden");rec.start(500);
 const dur=total();const iv=setInterval(()=>{const p=Math.min(1,(performance.now()/1000-ed.start)/dur);$("prog").firstElementChild.style.width=p*100+"%";$("prog").lastElementChild.textContent=Math.round(p*100)+"%";if(p>=1){clearInterval(iv);setTimeout(()=>rec.state!=="inactive"&&rec.stop(),300)}},100)}

// ---- Sham Cash payment modal ----
let orderId=sessionStorage.getItem("ri_order");if(!orderId){const A="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";orderId="WI-"+Array.from(crypto.getRandomValues(new Uint8Array(6)),b=>A[b%A.length]).join("");sessionStorage.setItem("ri_order",orderId)}
function openPay(){$("payPrice").textContent=CONFIG.price[lang];$("shamName").textContent=CONFIG.shamName;$("shamCode").textContent=CONFIG.shamAccount;$("orderId").textContent=orderId;
 const n=`${ed.state.bride||""} & ${ed.state.groom||""}`;$("sendReceipt").href=`mailto:${CONFIG.receiptEmail}?subject=${encodeURIComponent(tr("mailS")+" "+orderId)}&body=${encodeURIComponent(tr("mailB").replace("{id}",orderId).replace("{n}",n))}`;
 $("unlockMsg").textContent="";$("unlockMsg").className="umsg";$("pay").classList.remove("hidden");setTimeout(()=>$("payClose").focus(),50)}
function closePay(){$("pay").classList.add("hidden")}
$("payClose").onclick=closePay;$("pay").addEventListener("click",e=>{if(e.target.id==="pay")closePay()});
$("shamCopy").onclick=async()=>{try{await navigator.clipboard.writeText(CONFIG.shamAccount)}catch(e){const r=document.createRange();r.selectNode($("shamCode"));getSelection().removeAllRanges();getSelection().addRange(r);document.execCommand("copy")}toast(tr("copied"))};
async function sha(s){const d=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(s));return [...new Uint8Array(d)].map(b=>b.toString(16).padStart(2,"0")).join("")}
async function checkStored(){const c=localStorage.getItem("ri_code");window.RI_UNLOCKED_OK=!!(c&&window.RI_CODE_HASHES&&RI_CODE_HASHES.has(await sha(c)))}
$("unlockBtn").onclick=async()=>{const c=$("unlockCode").value.trim().toUpperCase().replace(/\s/g,"");const m=$("unlockMsg");
 if(window.RI_CODE_HASHES&&RI_CODE_HASHES.has(await sha(c))){localStorage.setItem("ri_code",c);window.RI_UNLOCKED_OK=true;m.textContent=tr("okU");m.className="umsg ok";ed.state.watermark=false;setTimeout(()=>{closePay();doExport()},900)}
 else{m.textContent=tr("badU");m.className="umsg err"}};
$("unlockCode").addEventListener("keydown",e=>{if(e.key==="Enter")$("unlockBtn").click()});

// ---- Language ----
function applyLang(){const h=document.documentElement;h.lang=lang;h.dir=lang=="ar"?"rtl":"ltr";
 document.querySelectorAll("[data-i18n]").forEach(e=>{const v=I18N[lang][e.dataset.i18n];if(v)e.textContent=v});
 $("langBtn").textContent=lang=="ar"?"English":"العربية";$("langBtn").lang=lang=="ar"?"en":"ar";document.title=lang=="ar"?"دعوة ملكية | دعوات زفاف فيديو فاخرة":"Royal Invites | Luxury Wedding Video Invitations";
 fillSelects();buildGrid();if(ed.open)$("edName").textContent=ed.tpl[lang]}
$("langBtn").onclick=()=>{lang=lang=="ar"?"en":"ar";localStorage.setItem("ri_lang",lang);applyLang()};
applyLang();checkStored();
