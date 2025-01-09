let currentSlide = 0;
const carousel = document.getElementById('carousel');
const images = carousel.getElementsByTagName('img');
const dotsContainer = document.getElementById('dots');

// 创建导航点
for (let i = 0; i < images.length; i++) {
    const dot = document.createElement('div');
    dot.className = 'dot';
    dot.onclick = () => goToSlide(i);
    dotsContainer.appendChild(dot);
}

const dots = document.getElementsByClassName('dot');
updateDots();

function updateDots() {
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }
    dots[currentSlide].classList.add('active');
}

function updateCarousel() {
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
    updateDots();
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % images.length;
    updateCarousel();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + images.length) % images.length;
    updateCarousel();
}

function goToSlide(n) {
    currentSlide = n;
    updateCarousel();
}

// 自动轮播
setInterval(nextSlide, 5000); 