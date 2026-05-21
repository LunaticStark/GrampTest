const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});

const library = [
    {
        id: 1,
        title: "Amanda Giles Lee",
        coverImage: "../../Art-Stuff/Amanda-Giles-Lee.png"
    },
    {
        id: 2,
        title: "Annetje Jans",
        coverImage: "../../Art-Stuff/Annetje-Jans.png"
    },
    {
        id: 3,
        title: "Fluhrer's Big Loaf Bakery",
        coverImage: "../../Art-Stuff/Fluhrer's-Big-Loaf-Bakery.png"
    },
    {
        id: 4,
        title: "Grandma B",
        coverImage: "../../Art-Stuff/Grandma-B.png"
    },
    {
        id: 5,
        title: "Grandma & Grandpa Moody",
        coverImage: "../../Art-Stuff/Grandma-and-Grandpa-Moody.png"
    },
    {
        id: 6,
        title: "Mission of Stan & Dorothy Stark to Martin's Cove",
        coverImage: "../../Art-Stuff/Martin's-Cove.png"
    },
    {
        id: 7,
        title: "Stan & Dorothy Family",
        coverImage: "../../Art-Stuff/Stan-and-Dorothy-Family.png"
    },
    {
        id: 8,
        title: "Stan & Dorothy Stark in Terra Bella 1991-1994",
        coverImage: "../../Art-Stuff/Terra-Bella.png"
    },
    {
        id: 9,
        title: "Stan & Dorothy: Book 4, Courtland 1969-1971 ",
        coverImage: "../../Art-Stuff/Courtland_1969-1971.png"
    },
]

const mainContent = document.querySelector('.main-content');

function displayLibrary() {
    mainContent.innerHTML = '';
    library.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('library-item');
        itemElement.innerHTML = `   
            <img src="${item.coverImage}" alt="${item.title} cover" class="library-cover">
            <h3 class="library-title">${item.title}</h3>
        `;

        itemElement.addEventListener('click', () => {
            openInfoLayer(item);
        });
        mainContent.appendChild(itemElement);
    });
}
displayLibrary();

function openInfoLayer(book) {
    const infoLayer = document.getElementById('info-layer');
    const infoImage = document.getElementById('info-image');
    const infoTitle = document.getElementById('info-title');
    const infoDescription = document.getElementById('info-description');
    const closeInfoButton = document.getElementById('close-info');

    infoImage.src = book.coverImage;
    infoTitle.innerText = book.title;
    infoDescription.innerText = book.description || "No description available.";
    infoLayer.classList.add('visible');

    closeInfoButton.addEventListener('click', () => {
        infoLayer.classList.remove('visible');
    });
}
