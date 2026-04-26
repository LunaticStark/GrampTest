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