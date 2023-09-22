!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},s={},l=e.parcelRequire69cf;null==l&&((l=function(e){if(e in t)return t[e].exports;if(e in s){var l=s[e];delete s[e];var i={id:e,exports:{}};return t[e]=i,l.call(i.exports,i,i.exports),i.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){s[e]=t},e.parcelRequire69cf=l);// Import required functions from './utils.js'
// Returns the mouse position
let i=e=>({x:e.clientX,y:e.clientY}),n=()=>({width:window.innerWidth,height:window.innerHeight}),o=()=>navigator.userAgent.toLowerCase().indexOf("firefox")>-1,r={x:0,y:0},a=e=>{r=i(e)};// Listen for 'mousemove' and 'pointermove' events and update 'mousepos' accordingly
document.getElementsByClassName("homepage")[0].addEventListener("mousemove",a),document.getElementsByClassName("homepage")[0].addEventListener("pointermove",a,{passive:!0});// Initialize window size object
let c=n();// Recalculate window size on 'resize' event
window.addEventListener("resize",e=>{c=n()});var d=l("cH00A");let u=document.querySelector(".cursor"),h=new class{// Initialize DOM and style related properties
DOM={// Main DOM element
el:null,// .cursor__inner element
inner:null,// cells that get shown on mousemove
cells:null};// Size of one cell (.cursor__inner-box)
cellSize;// Number of cell rows
rows;// Number of cell columns
columns;// Settings
settings={// Time that one cells gets visible before fading out
ttl:.2};constructor(e){this.DOM.el=e,// Cells wrapper element that gets the SVG filter applied
this.DOM.inner=this.DOM.el.querySelector(".cursor__inner"),o()||(this.DOM.inner.style.filter="url(#gooey)"),// ttl from data attr
this.settings.ttl=this.DOM.el.getAttribute("data-ttl")||this.settings.ttl,// Calculate how many cells to insert into the .cursor__inner element:
this.layout(),// Initialize/Bind some events
this.initEvents()}/**
     * Initialize/bind events
     */initEvents(){// Recalculate and create the .cursor__inner-box elements on 'resize'
window.addEventListener("resize",()=>this.layout());// Show/hide cells on 'mousemove' or 'pointermove' events
let e=()=>{// Check which cell is being "hovered"
let e=this.getCellAtCursor();null!==e&&this.cachedCell!==e&&(// Cache it
this.cachedCell=e,// Set opacity to 1
gsap.set(e,{opacity:1}),// Set it back to 0 after a certain delay
gsap.set(e,{opacity:0,delay:this.settings.ttl}));// gsap.to(cell, { duration: 0.3, ease: 'expo', opacity: 0, delay: this.settings.ttl });
};document.getElementsByClassName("homepage")[0].addEventListener("mousemove",e),document.getElementsByClassName("homepage")[0].addEventListener("pointermove",e,{passive:!0})}/**
     * Calculate and create the .cursor__inner-box elements.
     * These are the elements that get shown when moving the mouse
     */layout(){let e;// The number of columns is defined in a CSS variable --columns
this.columns=getComputedStyle(this.DOM.el).getPropertyValue("--columns"),// Calculate cell size
this.cellSize=c.width/this.columns,// Calculate number of rows
this.rows=Math.ceil(c.height/this.cellSize),// Calculate the total amount of cells (rows x columns)
this.cellsTotal=this.rows*this.columns;// Insert [this.cellsTotal] cursor__inner-box elements inside the .cursor__inner element
let t="";// Erase contents
this.DOM.inner.innerHTML="";let s=this.DOM.el.getAttribute("data-custom-colors"),l=0;s&&(l=(e=this.DOM.el.getAttribute("data-custom-colors").split(","))?e.length:0);for(let s=0;s<this.cellsTotal;++s)t+=0===l?'<div class="cursor__inner-box"></div>':`<div style="transform: scale(${gsap.utils.random(.5,2)}); background:${e[Math.round(gsap.utils.random(0,l-1))]}" class="cursor__inner-box"></div>`;this.DOM.inner.innerHTML=t,this.DOM.cells=this.DOM.inner.children}/**
     * Gets the cell at the position of the cursor
     */getCellAtCursor(){let e=Math.floor(r.x/this.cellSize),t=Math.floor(r.y/this.cellSize),s=t*this.columns+e;return s>=this.cellsTotal||s<0?(console.error("Cell index out of bounds"),null):this.DOM.cells[s]}}(u);// Easter egg: click anywhere
document.getElementsByClassName("homepage")[0].addEventListener("click",()=>{(0,d.gsap).timeline().addLabel("start",0).to(h.DOM.cells,{duration:1,ease:"power4",opacity:1,stagger:{from:[...h.DOM.cells].indexOf(h.getCellAtCursor()),each:.02,grid:[h.rows,h.columns]}},"start").to(h.DOM.cells,{duration:1,ease:"power1",opacity:0,stagger:{from:[...h.DOM.cells].indexOf(h.getCellAtCursor()),each:.03,grid:[h.rows,h.columns]}},"start+=0.3")})}();