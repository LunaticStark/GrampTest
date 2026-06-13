const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});

const playbutton1 = document.getElementById('playbutt1');
const playbutton2 = document.getElementById('playbutt2');
const playbutton3 = document.getElementById('playbutt3');

playbutton1.addEventListener('click', () => {
    window.open("https://www.youtube.com/watch?v=V2FXntcrMtY&t", "_blank")
});
playbutton2.addEventListener('click', () => {
     window.open("https://www.youtube.com/watch?v=LsYW3fB81D8&t", "_blank");
});
playbutton3.addEventListener('click', () => {
     window.open("https://www.youtube.com/watch?v=oNmoAIs4Y7E", "_blank");
});

const familyButtons = document.querySelectorAll('.family-button');

familyButtons.forEach(button => {
    button.addEventListener('click', () => {
        const personId = button.id;
        const encodedId = encodeURIComponent(personId);
        window.location.href = `Pages/family-page/index.html?Person=${encodedId}`;
    })
})