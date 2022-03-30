//menu responsive code
var menu = document.querySelector(".menu");
var menu_toggle = document.querySelector(".menu_toggle");

menu_toggle.onclick = function(){
    menu_toggle.classList.toggle("active");
    menu.classList.toggle("responsive")
}

//animation

const header = document.querySelector("header");
const title_span = document.querySelectorAll(".texte h1 span");
const p = document.querySelector(".texte p")
const a = document.querySelector(".texte a")
const img = document.querySelector(".image_logo")

window.addEventListener('load',()=>{

    const TL = gsap.timeline({paused: true});
    TL
    .staggerFrom(header , 1 , {y:-100, opacity:0 ,ease: "power2.out"}, 0.1)
    .staggerFrom(img , 1 , {x:1000, opacity:0 ,ease: "power2.out"}, 0.3)
    .staggerFrom(title_span , 1 , {opacity:0 ,ease: "power2.out"}, 0.1)
    .staggerFrom(p , 1 , {opacity:0 ,ease: "power2.out"}, 0.1)
    .staggerFrom(a , 1 , {opacity:0 ,ease: "power2.out"}, 0.3)
    
    TL.play()
})