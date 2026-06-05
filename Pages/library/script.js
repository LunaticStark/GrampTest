const ismobile = window.innerWidth <= 768;
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});

const library = [
    {
        id: 1,
        title: "Amanda Giles Lee",
        coverImage: "../../Art-Stuff/book_covers/Amanda-Giles-Lee.png",
        buyLink: "https://www.lulu.com/shop/stanley-stark/amanda-giles-lee/paperback/product-1mkw9r8z.html?page=1&pageSize=4",
        description: "History of the Amanda Giles Lee and Robert Culpepper Lee family for 100 years from Anson County, North Carolina to Texas to Arizona and Colorado",
        previewPages: [
            "../../Art-Stuff/book-pages/AGL/AGL-page1.png",
            "../../Art-Stuff/book-pages/AGL/AGL-page2.png",
            "../../Art-Stuff/book-pages/AGL/AGL-page3.png"
        ],
    },
    {
        id: 2,
        title: "Annetje Jans",
        coverImage: "../../Art-Stuff/book_covers/Annetje-Jans.png",
        buyLink: "https://www.lulu.com/shop/stanley-l-stark/annetje-jans/paperback/product-1yzy82py.html?page=1&pageSize=4",
        buyLink2: "https://www.lulu.com/shop/stanley-l-stark/annetje-jans/ebook/product-1m4nqq28.html?page=1&pageSize=4",
        description: "Annetje Jans was accused of lifting her skirt while crossing a street, causing a flurry of gossip in Early New York.Settlers struggled to make a new world, but gossip and in-fighting was as much a part of New Amsterdam as was fighting the Indians. This is a concise  history of Annetje Jans, also known as Anneke Janse, Anna Weber, Anna Webber,Anneke Webber, Anna Jane Webber, Annetje Bogartus, one of the first New York settlers. This 15th Century American Woman Colonist of New Amsterdam  is ancestor to many, many thousands of Americans. This book contains information about many other New Amsterdam people as well.",
    },
    {
        id: 3,
        title: "Fluhrer's Big Loaf Bakery",
        coverImage: "../../Art-Stuff/book_covers/Fluhrer's-Big-Loaf-Bakery.png",
        buyLink: "https://www.lulu.com/shop/stanley-stark/fluhrers-big-loaf-bakery/paperback/product-1nzr6gr9.html?page=1&pageSize=4",
        description: "Fluhrer's Bakery in the Humboldt County Redwoods was a major industry in Eureka from 1900 to 2000, in the Northern California area and had many employees. This book describes the experiences of Stan Stark who worked there on and off for 24 years, has pictures of most of the machines used  the last 40 years, and some from the 1930's. All employees of 1961 are listed with their pictures, and some others are included back to the 1940's. Includes other history of Big Loaf Bakery including Log Cabin Bakery and the final closing of the bakery. Many fantastic bakery pictures.",
        previewPages: [
            "../../Art-Stuff/book-pages/FBLB/FBLB-page1.png",
            "../../Art-Stuff/book-pages/FBLB/FBLB-page2.png",
            "../../Art-Stuff/book-pages/FBLB/FBLB-page3.png"
        ],
    },
    {
        id: 4,
        title: "Grandma B",
        coverImage: "../../Art-Stuff/book_covers/Grandma-B.png",
        buyLink: "https://www.lulu.com/shop/stanley-stark/grandma-b/paperback/product-1kkjrdem.html?page=1&pageSize=4",
        description: "Alta had six husbands and a troubled time as a young woman. But I did not know her until she was over 40 and had found the love of her life. George Bockhouse allowed her to become Grandma B. She was my favorite relative. When I went to her house as a child, I played under the sink using the pipes and valves as a steering wheel, for a car, submarine, airplane, even a rocket ship. To me her life was idyllic, and only when I was over 50 did I begin to realize how much pain she had endured.",
        previewPages: [
            "../../Art-Stuff/book-pages/GB/GB-page1.png",
            "../../Art-Stuff/book-pages/GB/GB-page2.png",
            "../../Art-Stuff/book-pages/GB/GB-page3.png"
        ],
    },
    {
        id: 5,
        title: "Grandma & Grandpa Moody",
        coverImage: "../../Art-Stuff/book_covers/Grandma-and-Grandpa-Moody.png",
        buyLink: "https://www.lulu.com/shop/stanley-stark/grandma-and-grandpa-moody/paperback/product-1wrww2j9.html?page=1&pageSize=4",
        description: "This is the story of Howard and Ella Moody. Ella asked her father to send her away to be a servant girl, because she didn't like the girl he had hired to be a servant in their home, Ella left her servant home to work as a cannery worker in Main. She married Howard Moody, and they went west to San Francisco, then north to Eureka, California. Howard homesteaded a ranch in the mountains of Humboldt and Trinity Counties near Alderpoint. Howard worked for the Northwestern Pacific Railroad during its heyday, cleaning up slides and repairing track from the floods of the Eel River. On his days off he built his ranch, and Howard and Ella raised eleven children in those mountains. The children rode the trains to high school. Ella moved to Eureka after Howard was killed in a train accident and lived in a little house across Glatt Street from Sequoia Park. Her grandchildren loved to play in the park among the giant redwood trees.",
        previewPages: [
            "../../Art-Stuff/book-pages/G&GM/G&GM-page1.png",
            "../../Art-Stuff/book-pages/G&GM/G&GM-page2.png",
            "../../Art-Stuff/book-pages/G&GM/G&GM-page3.png"
        ],
    },
    {
        id: 6,
        title: "Mission of Stan & Dorothy Stark to Martin's Cove",
        coverImage: "../../Art-Stuff/book_covers/Martin's-Cove.png",
        buyLink: "https://www.lulu.com/shop/stanley-stark/mission-of-stan-and-dorothy-stark-to-martins-cove/paperback/product-18r457yg.html?page=1&pageSize=4",
        description: "Stan and Dorothy Stark's experiences in Martin's Cove on the Old Mormon Trail.",
    },
    {
        id: 7,
        title: "Stan & Dorothy",
        coverImage: "../../Art-Stuff/book_covers/Stan-and-Dorothy-Family.png",
        buyLink: "https://www.lulu.com/shop/stanley-stark/stan-and-dorothy-family/paperback/product-gj9vdmp.html?page=1&pageSize=4",
        description: "Stan and Dorothy Stark's first  twelve years together, with Theresa, Robby, Tommy, Cindy, Jeanette and Kyle, from 1957 to 1968.",
    },
    {
        id: 8,
        title: "Stan & Dorothy in Terra Bella 1991-1994",
        coverImage: "../../Art-Stuff/book_covers/Terra-Bella.png",
        buyLink: "https://www.lulu.com/shop/stanley-l-stark/stan-and-dorothy-stark-in-terra-bella-1991-1994/paperback/product-7k9grwd.html?page=1&pageSize=4",
        description: "Stan and Dorothy during their first four years at Terra Bella.",
        previewPages: [
            "../../Art-Stuff/book-pages/S&DITB/S&DITB-page1.png",
            "../../Art-Stuff/book-pages/S&DITB/S&DITB-page2.png",
            "../../Art-Stuff/book-pages/S&DITB/S&DITB-page3.png"
        ],
    },
    {
        id: 9,
        title: "Stan & Dorothy: Book 4, Courtland 1969-1971 ",
        coverImage: "../../Art-Stuff/book_covers/Courtland_1969-1971.png",
        buyLink: "https://www.lulu.com/shop/stanley-stark/stan-and-dorothy-book-4-courtland-1969-1971/paperback/product-1e7mm4n6.html?page=1&pageSize=4",
        buyLink2: "https://www.lulu.com/shop/stanley-stark/stan-and-dorothy-book-4-courtland-1969-1971/ebook/product-1nq87kgw.html?page=1&pageSize=4",
        description: "Two years in the life of Stanley and Dorothy Stark when they lived in Courtland, California from Sept. 1969 until August of 1971. Photos and letters.",
        previewPages: [
            "../../Art-Stuff/book-pages/S&DB4C/S&DB4C-page1.png",
            "../../Art-Stuff/book-pages/S&DB4C/S&DB4C-page2.png",
            "../../Art-Stuff/book-pages/S&DB4C/S&DB4C-page3.png"
        ],
    },
    {
        id: 10,
        title: "Colonial Ancestors of Stan & Dorothy Stark",
        coverImage: "../../Art-Stuff/book_covers/Colonial.png",
        buyLink: "#",
        description: "Into this world were born our Colonial Ancestors who took the freedoms they began to have and left their homes and came to America. Here are eight stories about those Ancestors.",
        previewPages: [
            "../../Art-Stuff/book-pages/CAOS&D/CAOS&D-page1.png",
            "../../Art-Stuff/book-pages/CAOS&D/CAOS&D-page2.png",
            "../../Art-Stuff/book-pages/CAOS&D/CAOS&D-page3.png"
        ],
    },
     {
        id: 11,
        title: "Exodus to Terra Bella",
        coverImage: "../../Art-Stuff/book_covers/Exodus-of-Terra-Bella.png",
        buyLink: "#",
        description: "",
        previewPages: [
            "../../Art-Stuff/book-pages/ETTB/ETTB-page1.png",
            "../../Art-Stuff/book-pages/ETTB/ETTB-page2.png",
            "../../Art-Stuff/book-pages/ETTB/ETTB-page3.png"
        ],
    },
     {
        id: 12,
        title: "Larry, Elizabeth & Girls",
        coverImage: "../../Art-Stuff/book_covers/Larrry-elizabith-&-girls.png",
        buyLink: "#",
        description: "History of Larry and Elizabeth Shoemaker, and their family. Including th",
        previewPages: [
            "../../Art-Stuff/book-pages/LE&G/LE&G-page1.png",
            "../../Art-Stuff/book-pages/LE&G/LE&G-page2.png",
            "../../Art-Stuff/book-pages/LE&G/LE&G-page3.png"
        ],
    },
     {
        id: 13,
        title: "Stan & Dorothy in Clarksburg",
        coverImage: "../../Art-Stuff/book_covers/Stan-&-Dorothy-Clarksburg.png",
        buyLink: "#",
        description: "Stan and Dorothy's time in Clarksburg, California from August 1971 to August 1981.",
        previewPages: [
            "../../Art-Stuff/book-pages/S&DIC/S&DIC-page1.png",
            "../../Art-Stuff/book-pages/S&DIC/S&DIC-page2.png",
            "../../Art-Stuff/book-pages/S&DIC/S&DIC-page3.png"
        ],
    },
     {
        id: 14,
        title: "Stark/Shoemaker Family Reunion 2017",
        coverImage: "../../Art-Stuff/book_covers/Stark&shoemaker-reunion.png",
        buyLink: "#",
        description: "While more of a brochure than a book, this booklet contains some photos and stories of Stan and Dorothy's history in Eureka. ",
        previewPages: [
            "../../Art-Stuff/book-pages/S_SFR/S_SFR-page1.png",
            "../../Art-Stuff/book-pages/S_SFR/S_SFR-page2.png",
            "../../Art-Stuff/book-pages/S_SFR/S_SFR-page3.png"
        ],
    },
     {
        id: 15,
        title: "The Stark Family at San Lucas",
        coverImage: "../../Art-Stuff/book_covers/San-lucas.png",
        buyLink: "#",
        description: "Stan and Dorothy stark, with hyle, Susy, Allison, Gooby/Stan, Ben, Ammon and Rebekah moved from Arcata to San Lucas in August of 1982. This book also includes the last half of thier life in Arcata. ",
        previewPages: [
            "../../Art-Stuff/book-pages/TSFASL/TSFASL-page1.png",
            "../../Art-Stuff/book-pages/TSFASL/TSFASL-page2.png",
            "../../Art-Stuff/book-pages/TSFASL/TSFASL-page3.png"
        ],
    },
     {
        id: 16,
        title: "Tom, Eunice & Family",
        coverImage: "../../Art-Stuff/book_covers/Tom-Eunice-&-Family.png",
        buyLink: "#",
        description: "A collection of tales and stories about Tom and Eunice Stark, their children and grandchildren.",
        previewPages: [
            "../../Art-Stuff/book-pages/TE&F/TE&F-page1.png",
            "../../Art-Stuff/book-pages/TE&F/TE&F-page2.png",
            "../../Art-Stuff/book-pages/TE&F/TE&F-page3.png"
        ],
    },
     {
        id: 17,
        title: "Victoria & the Mormons",
        coverImage: "../../Art-Stuff/book_covers/Victoria-&-the-Mormons.png",
        buyLink: "#",
        description: "Victoria has no plans for her longterm future, in fact she hasn't thought about it. One of the missionaries of the Church of Jesus Christ of Latter-day Saints she accidentally met has a skilled professional assassin hunting him. Victoria (not a member and not completely without guile) meets others who help her, but because of her innocence gets wrapped up in the assassin's plans and plots anyway.",
        previewPages: [
            "../../Art-Stuff/book-pages/VATM/VATM-page1.png",
            "../../Art-Stuff/book-pages/VATM/VATM-page2.png",
            "../../Art-Stuff/book-pages/VATM/VATM-page3.png"
        ],
    },
     {
        id: 18,
        title: "Trijntie Jonas",
        coverImage: "../../Art-Stuff/book_covers/Trijntie-Jonas.png",
        buyLink: "#",
        description: "",
    },
     {
        id: 19,
        title: "The War for Independence",
        coverImage: "../../Art-Stuff/book_covers/TWFI.png",
        buyLink: "#",
        description: "",
    },
     {
        id: 20,
        title: "Private Purinton",
        coverImage: "../../Art-Stuff/book_covers/Private-purinton.png",
        buyLink: "#",
        description: "",
    },
     {
        id: 21,
        title: "Sheriff Shoemaker",
        coverImage: "../../Art-Stuff/book_covers/Sheriff-shoemaker.png",
        buyLink: "#",
        description: "",
    }, {
        id: 22,
        title: "Stan & Dorothy at the Salt Lake Temple",
        coverImage: "../../Art-Stuff/book_covers/Salt-lake-temple.png",
        buyLink: "#",
        description: "",
    }, {
        id: 23,
        title: "John Stark & the Donner Party",
        coverImage: "../../Art-Stuff/book_covers/John-stark.png",
        buyLink: "#",
        description: "",
    },
     {
        id: 24,
        title: "California Here I Come",
        coverImage: "../../Art-Stuff/book_covers/California.png",
        buyLink: "#",
        description: "",
    },
     {
        id: 25,
        title: "The Missourian",
        coverImage: "../../Art-Stuff/book_covers/The-missourian.png",
        buyLink: "#",
        description: "",
    },
]

const mainContent = document.querySelector('.main-content');
const buyableLibrary = document.getElementById('buyable-library');
const nonBuyableLibrary = document.getElementById('non-buyable-library');
const buyableButton = document.getElementById('buyable-button');
const nonBuyableButton = document.getElementById('non-buyable-button');

buyableButton.addEventListener('click', () => {
    buyableLibrary.classList.toggle('visible');
    nonBuyableLibrary.classList.remove('visible');
});

nonBuyableButton.addEventListener('click', () => {
    nonBuyableLibrary.classList.toggle('visible');
    buyableLibrary.classList.add('visible');
});

function displayLibrary() {
    library.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('library-item');
        itemElement.innerHTML = `   
            <img src="${item.coverImage}" alt="${item.title} cover" class="library-cover">
            <h3 class="library-title">${item.title}</h3>
        `;

        itemElement.addEventListener('click', () => {
            openInfoLayer(item);
            window.scrollTo(0, 0);
        });
        if (ismobile) {
            if (item.buyLink === "#") {
                nonBuyableLibrary.appendChild(itemElement);
            } else {
                buyableLibrary.appendChild(itemElement);
            }
        } else if (!ismobile) {
            mainContent.appendChild(itemElement);
        }
    });
}

function openInfoLayer(book) {
    const infoLayer = document.getElementById('info-layer');
    const infoImage = document.getElementById('info-image');
    const infoTitle = document.getElementById('info-title');
    const infoDescription = document.getElementById('info-description');
    const infoBuyLink = document.getElementById('info-buy-link');
    const infoBuyLink2 = document.getElementById('info-buy-link2');
    const infoLinks = document.getElementById('info-links');
    const closeInfoButton = document.getElementById('close-info');
    const previewBox = document.getElementById('preview-box');
    const previewpage1 = document.getElementById('preview-1');
    const previewpage2 = document.getElementById('preview-2');
    const previewpage3 = document.getElementById('preview-3');


    infoImage.src = book.coverImage;
    infoTitle.innerText = book.title;
    infoDescription.innerText = book.description || "No description available.";
    infoBuyLink.href = book.buyLink || "#";
    infoBuyLink2.href = book.buyLink2 || "#";
    if (book.buyLink === "#") {
        infoLinks.style.display = 'none';
    } else if (!book.buyLink2){
            infoBuyLink2.style.display = 'none';
    }
    if (book.previewPages) {
        previewpage1.src = book.previewPages[0] || '';
        previewpage2.src = book.previewPages[1] || '';
        previewpage3.src = book.previewPages[2] || '';
    } else  if (!book.previewPages) {
        previewBox.classList.add('hidden');
    }
    
    infoLayer.classList.add('visible');
    mainContent.style.display = 'none';
   

    closeInfoButton.addEventListener('click', () => {
        infoLayer.classList.remove('visible');
        previewBox.classList.remove('hidden')
        window.scrollTo(0, 0);
        mainContent.style.display = 'grid';
        previewpage1.src = '';
        previewpage2.src = '';
        previewpage3.src = '';
        infoBuyLink2.style.display = "block";
        infoLinks.style.display = 'flex';
    });
}

displayLibrary();

const urlParams = new URLSearchParams(window.location.search);
const bookIndex = urlParams.get('book');

if (bookIndex !== null) {
    const index = parseInt(bookIndex, 10);
    if (index >= 0 && index <= library.length) {
        const selectedBook = library[index];
        openInfoLayer(selectedBook);
        window.scrollTo(0, 0);
    }
}