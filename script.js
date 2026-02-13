const btn = document.getElementById("openBtn");
const surprise = document.getElementById("surprise");

btn.addEventListener("click", () => {
    surprise.classList.remove("hidden");
    btn.style.display = "none";
});
