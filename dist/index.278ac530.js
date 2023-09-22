var e,t,r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},s={},o=r.parcelRequire69cf;null==o&&((o=function(e){if(e in i)return i[e].exports;if(e in s){var t=s[e];delete s[e];var r={id:e,exports:{}};return i[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){s[e]=t},r.parcelRequire69cf=o),o.register("4hJWI",function(e,t){var r,i;r="undefined"!=typeof window?window:e.exports,i=function(){function e(){}let t=e.prototype;return t.on=function(e,t){if(!e||!t)return this;// set events hash
let r=this._events=this._events||{},i=r[e]=r[e]||[];return i.includes(t)||i.push(t),this},t.once=function(e,t){if(!e||!t)return this;// add event
this.on(e,t);// set once flag
// set onceEvents hash
let r=this._onceEvents=this._onceEvents||{};return(// set flag
(r[e]=r[e]||{})[t]=!0,this)},t.off=function(e,t){let r=this._events&&this._events[e];if(!r||!r.length)return this;let i=r.indexOf(t);return -1!=i&&r.splice(i,1),this},t.emitEvent=function(e,t){let r=this._events&&this._events[e];if(!r||!r.length)return this;// copy over to avoid interference if .off() in listener
r=r.slice(0),t=t||[];// once stuff
let i=this._onceEvents&&this._onceEvents[e];for(let s of r)i&&i[s]&&(// remove listener
// remove before trigger to prevent recursion
this.off(e,s),// unset once flag
delete i[s]),// trigger listener
s.apply(this,t);return this},t.allOff=function(){return delete this._events,delete this._onceEvents,this},e},e.exports?e.exports=i():r.EvEmitter=i()});// Import the necessary function for preloading images
var n={};e="undefined"!=typeof window?window:n,t=function(e,t){let r=e.jQuery,i=e.console;// -------------------------- imagesLoaded -------------------------- //
/**
 * @param {[Array, Element, NodeList, String]} elem
 * @param {[Object, Function]} options - if function, use as callback
 * @param {Function} onAlways - callback function
 * @returns {ImagesLoaded}
 */function s(e,t,o){var n;// coerce ImagesLoaded() without new, to be new ImagesLoaded()
if(!(this instanceof s))return new s(e,t,o);// use elem as selector string
let a=e;// bail if bad element
if("string"==typeof e&&(a=document.querySelectorAll(e)),!a){i.error(`Bad element for imagesLoaded ${a||e}`);return}this.elements=// use object if already an array
Array.isArray(n=a)?n:"object"==typeof n&&"number"==typeof n.length?[...n]:[n],this.options={},"function"==typeof t?o=t:Object.assign(this.options,t),o&&this.on("always",o),this.getImages(),r&&(this.jqDeferred=new r.Deferred),// HACK check async to allow time to bind listeners
setTimeout(this.check.bind(this))}s.prototype=Object.create(t.prototype),s.prototype.getImages=function(){this.images=[],// filter & find items if we have an item selector
this.elements.forEach(this.addElementImages,this)};let o=[1,9,11];/**
 * @param {Node} elem
 */s.prototype.addElementImages=function(e){"IMG"===e.nodeName&&this.addImage(e),!0===this.options.background&&this.addElementBackgroundImages(e);// find children
// no non-element nodes, #143
let{nodeType:t}=e;if(t&&o.includes(t)){// concat childElems to filterFound array
for(let t of e.querySelectorAll("img"))this.addImage(t);// get child background images
if("string"==typeof this.options.background)for(let t of e.querySelectorAll(this.options.background))this.addElementBackgroundImages(t)}};let n=/url\((['"])?(.*?)\1\)/gi;// --------------------------  -------------------------- //
function a(e){this.img=e}// -------------------------- Background -------------------------- //
function l(e,t){this.url=e,this.element=t,this.img=new Image}// --------------------------  -------------------------- //
return s.prototype.addElementBackgroundImages=function(e){let t=getComputedStyle(e);// Firefox returns null if in a hidden iframe https://bugzil.la/548397
if(!t)return;// get url inside url("...")
let r=n.exec(t.backgroundImage);for(;null!==r;){let i=r&&r[2];i&&this.addBackground(i,e),r=n.exec(t.backgroundImage)}},/**
 * @param {Image} img
 */s.prototype.addImage=function(e){let t=new a(e);this.images.push(t)},s.prototype.addBackground=function(e,t){let r=new l(e,t);this.images.push(r)},s.prototype.check=function(){// complete if no images
if(this.progressedCount=0,this.hasAnyBroken=!1,!this.images.length){this.complete();return}/* eslint-disable-next-line func-style */let e=(e,t,r)=>{// HACK - Chrome triggers event before object properties have changed. #83
setTimeout(()=>{this.progress(e,t,r)})};this.images.forEach(function(t){t.once("progress",e),t.check()})},s.prototype.progress=function(e,t,r){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,// progress event
this.emitEvent("progress",[this,e,t]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount===this.images.length&&this.complete(),this.options.debug&&i&&i.log(`progress: ${r}`,e,t)},s.prototype.complete=function(){let e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(e,[this]),this.emitEvent("always",[this]),this.jqDeferred){let e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}},a.prototype=Object.create(t.prototype),a.prototype.check=function(){if(this.getIsImageComplete()){// report based on naturalWidth
this.confirm(0!==this.img.naturalWidth,"naturalWidth");return}// If none of the checks above matched, simulate loading on detached element.
this.proxyImage=new Image,this.img.crossOrigin&&(this.proxyImage.crossOrigin=this.img.crossOrigin),this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),// bind to image as well for Firefox. #191
this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.proxyImage.src=this.img.currentSrc||this.img.src},a.prototype.getIsImageComplete=function(){// check for non-zero, non-undefined naturalWidth
// fixes Safari+InfiniteScroll+Masonry bug infinite-scroll#671
return this.img.complete&&this.img.naturalWidth},a.prototype.confirm=function(e,t){this.isLoaded=e;let{parentNode:r}=this.img,i="PICTURE"===r.nodeName?r:this.img;this.emitEvent("progress",[this,i,t])},// ----- events ----- //
// trigger specified handler for event type
a.prototype.handleEvent=function(e){let t="on"+e.type;this[t]&&this[t](e)},a.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},a.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},a.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},// inherit LoadingImage prototype
l.prototype=Object.create(a.prototype),l.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},l.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},l.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.element,t])},// -------------------------- jQuery -------------------------- //
s.makeJQueryPlugin=function(t){(t=t||e.jQuery)&&// $().imagesLoaded()
(// set local variable
(r=t).fn.imagesLoaded=function(e,t){return new s(this,e,t).jqDeferred.promise(r(this))})},// try making plugin
s.makeJQueryPlugin(),s},n?n=t(e,o("4hJWI")):e.imagesLoaded=t(e,e.EvEmitter);// Helper function that lets you dynamically figure out a grid's rows/columns as well as further refine those with "odd" or "even" ones
// https://greensock.com/forums/topic/34808-how-can-i-animate-the-odd-and-even-columns-rows-of-a-grid-with-gsapto/?do=findComment&comment=174346
const a=e=>{let t=gsap.utils.toArray(e),r,i=(e,i,s,o)=>{let n=[],a={},l="even"===s,p;for(p in r.forEach((r,s)=>{let o=Math.round(r[e]+r[i]/2),n=a[o];n||(a[o]=n=[]),n.push(t[s])}),a)n.push(a[p]);if((l||"odd"===s)&&(n=n.filter((e,t)=>!(t%2)===l)),o){let e=[];return n.forEach(t=>e.push(...t)),e}return n};return t.refresh=()=>r=t.map(e=>e.getBoundingClientRect()),t.columns=(e,t)=>i("left","width",e,t),t.rows=(e,t)=>i("top","height",e,t),t.refresh(),t};var l=o("1oYLf"),p=o("aV8T4");(0,l.gsap).registerPlugin(p.ScrollTrigger);const h=document.querySelectorAll(".grid"),d=(e,t)=>{// Child elements of grid
let r=e.querySelector(".grid-wrap"),i=e.querySelectorAll(".grid__item"),s=[...i].map(e=>e.querySelector(".grid__item-inner")),o=(0,l.gsap).timeline({defaults:{ease:"none"},scrollTrigger:{trigger:r,start:"top bottom+=5%",end:"bottom top-=5%",scrub:!0}});// Apply different animations based on type
switch(t){case"type1":// Set some CSS related style values
e.style.setProperty("--perspective","1000px"),e.style.setProperty("--grid-inner-scale","0.5"),o.set(r,{rotationY:25}).set(i,{z:()=>(0,l.gsap).utils.random(-1600,200)}).fromTo(i,{xPercent:()=>(0,l.gsap).utils.random(-1e3,-500)},{xPercent:()=>(0,l.gsap).utils.random(500,1e3)},0).fromTo(s,{scale:2},{scale:.5},0);break;case"type2":// Set some CSS related style values
e.style.setProperty("--grid-width","160%"),e.style.setProperty("--perspective","2000px"),e.style.setProperty("--grid-inner-scale","0.5"),e.style.setProperty("--grid-item-ratio","0.8"),e.style.setProperty("--grid-columns","6"),e.style.setProperty("--grid-gap","14vw"),o.set(r,{rotationX:20}).set(i,{z:()=>(0,l.gsap).utils.random(-3e3,-1e3)}).fromTo(i,{yPercent:()=>(0,l.gsap).utils.random(100,1e3),rotationY:-45,filter:"brightness(200%)"},{ease:"power2",yPercent:()=>(0,l.gsap).utils.random(-1e3,-100),rotationY:45,filter:"brightness(0%)"},0).fromTo(r,{rotationZ:-5},{rotationX:-20,rotationZ:10,scale:1.2},0).fromTo(s,{scale:2},{scale:.5},0);break;case"type3":// Set some CSS related style values
e.style.setProperty("--grid-width","105%"),e.style.setProperty("--grid-columns","8"),e.style.setProperty("--perspective","1500px"),e.style.setProperty("--grid-inner-scale","0.5"),o.set(i,{transformOrigin:"50% 0%",z:()=>(0,l.gsap).utils.random(-5e3,-2e3),rotationX:()=>(0,l.gsap).utils.random(-65,-25),filter:"brightness(0%)"}).to(i,{xPercent:()=>(0,l.gsap).utils.random(-150,150),yPercent:()=>(0,l.gsap).utils.random(-300,300),rotationX:0,filter:"brightness(200%)"},0).to(r,{z:6500},0).fromTo(s,{scale:2},{scale:.5},0);break;case"type4":// Set some CSS related style values
e.style.setProperty("--grid-width","50%"),e.style.setProperty("--perspective","3000px"),e.style.setProperty("--grid-item-ratio","0.8"),e.style.setProperty("--grid-columns","3"),e.style.setProperty("--grid-gap","1vw"),o.set(r,{transformOrigin:"0% 50%",rotationY:30,xPercent:-75}).set(i,{transformOrigin:"50% 0%"}).to(i,{duration:.5,ease:"power2",z:500,stagger:.04},0).to(i,{duration:.5,ease:"power2.in",z:0,stagger:.04},.5).fromTo(i,{rotationX:-70,filter:"brightness(120%)"},{duration:1,rotationX:70,filter:"brightness(0%)",stagger:.04},0);break;case"type5":// Set some CSS related style values
e.style.setProperty("--grid-width","120%"),e.style.setProperty("--grid-columns","8"),e.style.setProperty("--grid-gap","0");let n=a(i);o.set(r,{rotationX:50}).to(r,{rotationX:30}).fromTo(i,{filter:"brightness(0%)"},{filter:"brightness(100%)"},0).to(n.rows("even"),{xPercent:-100,ease:"power1"},0).to(n.rows("odd"),{xPercent:100,ease:"power1"},0).addLabel("rowsEnd",">-=0.15").to(i,{ease:"power1",yPercent:()=>(0,l.gsap).utils.random(-100,200)},"rowsEnd");break;case"type6":// Set some CSS related style values
e.style.setProperty("--perspective","2500px"),e.style.setProperty("--grid-width","100%"),e.style.setProperty("--grid-gap","6"),e.style.setProperty("--grid-columns","3"),e.style.setProperty("--grid-item-ratio","1"),o.fromTo(i,{transformOrigin:"50% 200%",rotationX:0,yPercent:400},{yPercent:0,rotationY:360,opacity:.2,scale:.8,stagger:.03});break;default:console.error("Unknown animation type.")}},g=()=>{h.forEach((e,t)=>{// Determine animation type
let r;switch(t%6){case 0:r="type1";break;case 1:r="type2";break;case 2:r="type3";break;case 3:r="type4";break;case 4:r="type5";break;case 5:r="type6"}d(e,r)})};((e="img")=>new Promise(t=>{n(document.querySelectorAll(e),{background:!0},t)}))(".grid__item-inner").then(()=>{g()});