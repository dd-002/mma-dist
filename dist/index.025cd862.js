/*--------------------
Vars
--------------------*/let e=0,t=0,n=0,o=!1;/*--------------------
Get Z
--------------------*/const s=(e,t)=>e.map((n,o)=>t===o?e.length:e.length-Math.abs(t-o)),l=document.querySelectorAll(".carousel-item"),c=document.querySelectorAll(".cursor"),r=document.getElementsByClassName("carousel")[0],a=(e,t,n)=>{let o=s([...l],n)[t];e.style.setProperty("--zIndex",o),e.style.setProperty("--active",(t-n)/l.length)},u=()=>{n=Math.floor((e=Math.max(0,Math.min(e,160)))/160*(l.length-1)),l.forEach((e,t)=>a(e,t,n))};u(),/*--------------------
Click on Items
--------------------*/l.forEach((t,n)=>{t.addEventListener("click",()=>{e=n/l.length*160+10,u()})});/*--------------------
Handlers
--------------------*/const d=n=>{if("mousemove"===n.type&&c.forEach(e=>{e.style.transform=`translate(${n.clientX}px, ${n.clientY}px)`}),!o)return;let s=n.clientX||n.touches&&n.touches[0].clientX||0,l=-((s-t)*.1);e+=l,t=s,u()},h=e=>{o=!0,t=e.clientX||e.touches&&e.touches[0].clientX||0},i=()=>{o=!1};/*--------------------
Listeners
--------------------*/r.addEventListener("mousedown",h),r.addEventListener("mousemove",d),r.addEventListener("mouseup",i),r.addEventListener("touchstart",h),r.addEventListener("touchmove",d),r.addEventListener("touchend",i);