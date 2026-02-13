const btn = document.getElementById("openBtn");
const surprise = document.getElementById("surprise");
const overlay = document.querySelector(".overlay");

btn.addEventListener("click", () => {
    overlay.style.display = "none";
    surprise.classList.remove("hidden");
});

/* Sliding Slideshow */
let slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
}, 3000);
