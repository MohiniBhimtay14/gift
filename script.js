// Create floating hearts
function createFloatingHearts() {
    const heartsBg = document.getElementById('heartsBg');
    const hearts = ['❤️', '💕', '💖', '💗', '💘', '💝'];
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart-float';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 3 + 5) + 's';
        heart.style.fontSize = (Math.random() * 15 + 15) + 'px';
        heartsBg.appendChild(heart);
        
        setTimeout(() => heart.remove(), 8000);
    }, 600);
}

// Open button functionality
const openBtn = document.getElementById('openBtn');
const overlay = document.getElementById('overlay');
const mainContent = document.getElementById('main-content');

openBtn.addEventListener('click', () => {
    overlay.classList.add('hidden');
    setTimeout(() => {
        mainContent.classList.add('visible');
        createFloatingHearts();
    }, 300);
});

// Gallery functionality
const slides = document.querySelectorAll('.gallery-slide');
const galleryNav = document.getElementById('galleryNav');
let currentSlide = 0;

// Create navigation dots
slides.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.className = 'nav-dot' + (index === 0 ? ' active' : '');
    dot.addEventListener('click', () => goToSlide(index));
    galleryNav.appendChild(dot);
});

const navDots = document.querySelectorAll('.nav-dot');

function goToSlide(n) {
    slides[currentSlide].classList.remove('active');
    navDots[currentSlide].classList.remove('active');
    
    currentSlide = n;
    
    slides[currentSlide].classList.add('active');
    navDots[currentSlide].classList.add('active');
}

function nextSlide() {
    goToSlide((currentSlide + 1) % slides.length);
}

// Auto-advance slides
setInterval(nextSlide, 4000);

// Add swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;

document.querySelector('.gallery-container').addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
});

document.querySelector('.gallery-container').addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    if (touchEndX < touchStartX - 50) {
        nextSlide();
    }
    if (touchEndX > touchStartX + 50) {
        goToSlide((currentSlide - 1 + slides.length) % slides.length);
    }
}
