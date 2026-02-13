const openBtn = document.getElementById("openBtn");
const overlay = document.getElementById("overlay");
const mainContent = document.getElementById("main-content");
const bgMusic = document.getElementById("bgMusic");

/* Open Surprise */
openBtn.addEventListener("click", () => {

    overlay.style.opacity = "0";

    setTimeout(() => {
        overlay.style.display = "none";
        mainContent.classList.add("visible");
        bgMusic.play();
        startHearts();
        typeWriter();
        fireworks();
    }, 800);

});

/* Floating Hearts */
function startHearts(){
    setInterval(()=>{
        const heart = document.createElement("div");
        heart.className="heart";
        heart.innerHTML="❤️";
        heart.style.left=Math.random()*100+"%";
        heart.style.fontSize=(20+Math.random()*20)+"px";
        document.body.appendChild(heart);

        setTimeout(()=>heart.remove(),6000);
    },400);
}

/* Gallery */
const slides = document.querySelectorAll(".gallery-slide");
const nav = document.getElementById("galleryNav");
let index=0;

slides.forEach((_,i)=>{
    const dot=document.createElement("span");
    dot.className="nav-dot"+(i===0?" active":"");
    dot.onclick=()=>showSlide(i);
    nav.appendChild(dot);
});

const dots=document.querySelectorAll(".nav-dot");

function showSlide(i){
    slides[index].classList.remove("active");
    dots[index].classList.remove("active");
    index=i;
    slides[index].classList.add("active");
    dots[index].classList.add("active");
}

setInterval(()=>showSlide((index+1)%slides.length),4000);

/* Typewriter Effect */
const text="From the moment you entered my life, everything became magical. You are my today, my tomorrow, and my forever.";
let i=0;

function typeWriter(){
    if(i<text.length){
        document.getElementById("typedText").innerHTML+=text.charAt(i);
        i++;
        setTimeout(typeWriter,40);
    }
}

/* Fireworks */
function fireworks(){
    for(let i=0;i<30;i++){
        const spark=document.createElement("div");
        spark.innerHTML="✨";
        spark.style.position="fixed";
        spark.style.left=Math.random()*100+"%";
        spark.style.top=Math.random()*100+"%";
        spark.style.fontSize="20px";
        spark.style.animation="fadeOut 2s forwards";
        document.body.appendChild(spark);

        setTimeout(()=>spark.remove(),2000);
    }
}
