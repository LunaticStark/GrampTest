const header = document.querySelector('.main-header');
const SwipeZone = document.getElementById('photos-carousel');
function adjustContentPosition() {
    const swipeZoneHeight = SwipeZone.offsetHeight;
    const headerHeight = header.offsetHeight;
    document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
    document.documentElement.style.setProperty('--carousel-height', `${swipeZoneHeight}px`);
}
window.addEventListener('load', adjustContentPosition);
window.addEventListener('resize', adjustContentPosition);

const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});

const images = ["cindyPhotos/Cindy.png", "cindyPhotos/cindy aug 1963.png", "cindyPhotos/cindy bus.png", "cindyPhotos/cindy sitting2.png", "cindyPhotos/Cindy, standing1963.png", "cindyPhotos/cindysept1962.png", "cindyPhotos/Grandma Stark & stark childre63.png", "cindyPhotos/Grandpa Tome Cindy others.png"];
images.forEach((src) => {
    const img = new Image();
    img.src = src;
});
let currentIndex = 0;
let timer;

const img1 = document.getElementById(`img1`);
const img2 = document.getElementById(`img2`);

function showNextImage() {
    let nextIndex = (currentIndex + 1) % images.length;
    switchToImage(nextIndex);
}
function switchToImage(nextIndex) {
    const currentEl = img1.classList.contains(`active`) ? img1 : img2;
    const nextEl = currentEl === img1 ? img2 : img1;
    nextEl.src = images[nextIndex];

    currentEl.classList.remove('active');
    nextEl.classList.add('active');

    currentIndex = nextIndex;
    updateCircles(currentIndex)
}
function goToImage(index) {
    if (index === currentIndex) return;

    clearInterval(timer);
    switchToImage(index);
    startTimer();
}
function startTimer() {
    timer = setInterval(showNextImage, 5000)
}

const track = document.getElementById(`circles-track`);
const allCircles = document.querySelectorAll(`.circle`);
const STEP_SIZE = 50;
function updateCircles(currentIndex) {
    const targetX = -(currentIndex * STEP_SIZE);
    track.style.transform = `translate(${targetX}px, -50%)`;

    allCircles.forEach((circle, index) => {
        circle.classList = 'circle';

        if (index === currentIndex) {
            circle.classList.add('active');
        } 
        else if (Math.abs(index - currentIndex) === 1) {
            circle.classList.add('adjacent');
        }
        else if (Math.abs(index - currentIndex) === 2) {
            circle.classList.add('far');
        }
    });
};

let touchStartX = 0;
let touchEndX = 0;
SwipeZone.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
});
SwipeZone.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});
function handleSwipe() {
    const swipeThreshold = 50;

    if (touchStartX - touchEndX > swipeThreshold) {
        let nextIndex = (currentIndex + 1) % images.length;
        goToImage(nextIndex);
    };
    if (touchEndX - touchStartX > swipeThreshold) {
        let prevIndex = (currentIndex - 1 + images.length) % images.length;
        goToImage(prevIndex);
    };
};



startTimer();
