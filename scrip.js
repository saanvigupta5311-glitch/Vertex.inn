/* ===========================================
   Vertex Landing Page JavaScript
=========================================== */

// Fade-in animation on scroll
const reveals = document.querySelectorAll(
".glass-card, .flip-card, .section-title, .hero-title, .hero-subtitle, .body-text"
);

function revealOnScroll(){

const windowHeight = window.innerHeight;

reveals.forEach((element)=>{

const top = element.getBoundingClientRect().top;

if(top < windowHeight - 120){

element.classList.add("active");
element.classList.add("reveal");

}

});

}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


/* ===========================================
   Active Navigation Highlight
=========================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", ()=>{

let current = "";

sections.forEach(section=>{

const sectionTop = section.offsetTop - 120;
const sectionHeight = section.clientHeight;

if(scrollY >= sectionTop){

current = section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("text-red-700","font-bold");

if(link.getAttribute("href")==="#" + current){

link.classList.add("text-red-700","font-bold");

}

});

});


/* ===========================================
   Smooth Button Hover Effect
=========================================== */

document.querySelectorAll(".primary-btn").forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="translateY(-4px) scale(1.03)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translateY(0px) scale(1)";

});

});


/* ===========================================
   Waitlist Form
=========================================== */

const form = document.querySelector("form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert(
"🎉 Thank you for joining the Vertex waitlist!\n\nWe'll notify you when we launch."
);

form.reset();

});

}


/* ===========================================
   Navbar Shadow
=========================================== */

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY > 40){

header.classList.add("shadow-xl");

}else{

header.classList.remove("shadow-xl");

}

});


/* ===========================================
   Flip Card Animation on Mobile
=========================================== */

const cards = document.querySelectorAll(".flip-card");

cards.forEach(card=>{

card.addEventListener("click",()=>{

const inner = card.querySelector(".flip-inner");

if(inner.style.transform==="rotateY(180deg)"){

inner.style.transform="rotateY(0deg)";

}else{

inner.style.transform="rotateY(180deg)";

}

});

});


/* ===========================================
   Console Message
=========================================== */

console.log(
"%cWelcome to Vertex 🚀",
"font-size:22px;color:#B11226;font-weight:bold;"
);

console.log(
"%cOwn Your Goals",
"font-size:16px;color:#444;"
);
