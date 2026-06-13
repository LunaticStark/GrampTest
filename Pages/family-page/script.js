const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});

const familyMembers  = [
    {
        name: "Allison",
    },
    {
        name: "Ammon & Jeanelle Stark",
        familyphoto: "../../Art-stuff/family-photos/Ammon&jeanelleStark.png",
        descriprion: "",
        children: ["Stonewall, Truck, Hyrim, Shepherd"],
        parents1: ["Stanley Stark, Dorothy Stark"],
        parents2: ["Mark Hannon, Robin Hannon"],
    },
    {
        name: "Ben",
    },
    {
        name: "Theresa",
    },
    {
        name: "Stanley",
    },
    {
        name: "Rob",
    },
    {
        name: "Stan (Gooby)",
    },
    {
        name: "Tommy",
    },
    {
        name: "Kyle",
    },
    {
        name: "Suzy",
    },
    {
        name: "Rebekah",
    },
    {
        name: "Dorothy",
    },
    {
        name: "Jeanette",
    },
    {
        name: "Cindy",
        familyphoto: "../../Art-stuff/family-photos/Cindy.png",
    },
]

function test(item) {
    const testH1 = document.getElementById('testH1');
    const logo = document.getElementById('logo');
    const image = document.getElementById('testImg');
    const description = document.getElementById('description')
    const childrenList = document.getElementById('children')
    const parentsList1 = document.getElementById('parent1')
    const parentsList2 = document.getElementById('parent2')
    testH1.innerText = item.name;
    logo.innerText = item.name;
    image.src = item.familyphoto;

}
const urlParams = new URLSearchParams(window.location.search);
const familyIndex = urlParams.get('Person')

if (familyIndex !== null) {
    const selectedFamilymember = familyMembers.find(member => member.name === familyIndex);
    if (selectedFamilymember) {
        test(selectedFamilymember)
    } else {
        console.log("Family Member not found with name:", familyIndex);
    }
}