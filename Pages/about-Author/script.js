const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});

const familyMembers  = [
    {
        id: 1,
        name: "Allison",
    },
    {
        id: 2,
        name: "Ammon",
    },
    {
        id: 3,
        name: "Ben",
    },
    {
        id: 4,
        name: "Theresa",
    },
    {
        id: 5,
        name: "Stanley",
    },
    {
        id: 6,
        name: "Rob",
    },
    {
        id: 7,
        name: "Gooby",
    },
    {
        id: 8,
        name: "Tommy",
    },
    {
        id: 9,
        name: "Kyle",
    },
    {
        id: 10,
        name: "Susy",
    },
    {
        id: 11,
        name: "Rebekah",
    },
    {
        id: 12,
        name: "Dorothy",
    },
    {
        id: 13,
        name: "Jeanette",
    },
    {
        id: 14,
        name: "Cindy",
    },
]

function test(item) {
    const testH1 = document.getElementById('testH1');
    testH1.innerText = item.name;
    
}
const urlParams = new URLSearchParams(window.location.search);
const familyIndex = urlParams.get('Person')

if (familyIndex !== null) {
    const index = parseInt(familyIndex, 10);
    if (index >= 0 && index <= familyMembers.length) {
        const selectedFamliyMember = familyMembers[index];
        test(selectedFamliyMember)
    }
}