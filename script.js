const menuButton = document.getElementById("menu-mainButton");
const expandedMenu = document.getElementById("menu-expanded");
let isMenuExpanded = false;

menuButton.addEventListener("click", () => {
    if (expandedMenu.style.display === "none" || expandedMenu.style.display === "") {
        expandedMenu.style.display = "block";
    } else {
        expandedMenu.style.display = "none";
    }
});
document.addEventListener("click", (event) => {
    if (!menuButton.contains(event.target) && !expandedMenu.contains(event.target)) {
        expandedMenu.style.display = "none";
    }
});

const slider = document.getElementById("content-container");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("dragstart", (e) => {
    e.preventDefault();
});

slider.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
    isDown = false;
}); 

slider.addEventListener("mouseup", () => {
    isDown = false;
});

slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.8; 

    let targetScrollLeft = scrollLeft - walk;
    const maxScroll = (slider.scrollWidth - slider.clientWidth) - 1;
    if (targetScrollLeft < 0) {
        targetScrollLeft = 0;
    } else if (targetScrollLeft > maxScroll) {
        targetScrollLeft = maxScroll;
    }
    slider.scrollLeft = targetScrollLeft;
});


