const header = document.querySelector('.main-header');

function adjustContentPosition() {
    const headerHeight = header.offsetHeight;
    document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
}
window.addEventListener('load', adjustContentPosition);
window.addEventListener('resize', adjustContentPosition);


const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});

const familyButtons = document.querySelectorAll('.family-button');
familyButtons.forEach(button => {
    button.addEventListener('click', () => {
        const personId = button.id;
        const encodedId = encodeURIComponent(personId);
        if (personId !== "Cindy") {
        window.location.href = `Pages/family-page/index.html?Person=${encodedId}`;
        } else if (personId === "Cindy") {
            window.location.href = `Pages/cindys-page/index.html`
        }
    })
})

document.querySelectorAll('.content-box').forEach(box => {
    const button = box.querySelector('.expandtion-button');
    button.addEventListener('click', () => {
        const content = box.querySelector('.expandtion-content');
        content.classList.toggle('expanded');

        if (content.classList.contains('expanded')) {
            button.innerHTML = '&#11165;';
        } else {
            button.innerHTML = '&#11167;';
        }

        if (content.classList.contains('expanded')) {
            setTimeout(() => {
                box.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 200);
        }

        document.querySelectorAll('.expandtion-content').forEach(otherContent => {
            if (otherContent !== content) {
                otherContent.classList.remove('expanded');
                
                const otherBox = otherContent.closest('.content-box');

                if (otherBox) {
                    const otherButton = otherBox.querySelector('.expandtion-button');
                    if (otherButton) {
                        otherButton.innerHTML = '&#11167;';
                    }
                }
            }
        });
    });
});