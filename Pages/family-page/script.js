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
        familyphoto: "../../Art-Stuff/family-photos/Ammon&jeanelleStark.png",
        photobuttons: [
            {
                name: "Stonewall",
                top: "48%",
                left: "85%",
                width: "35px",
                height: "40px",
            },
            {
                name: "Truck",
                top: "55%",
                left: "35%",
                width: "35px",
                height: "60px",
            },
            {
                name: "Hyrim",
                top: "30%",
                left: "42%",
                width: "35px",
                height: "50px",
            },
            {
                name: "Shepherd",
                top: "55%",
                left: "76%",
                width: "30px",
                height: "60px",
            },
            {
                name: "Mark & Robin Hannon",
                top: "50%",
                left: "49%",
                width: "40px",
                height: "60px",
            },
            {
                name: "Mark & Robin Hannon",
                top: "53%",
                left: "60%",
                width: "40px",
                height: "60px",
            },
        ],
        descriprion: "",
        children: ["Stonewall, Truck, Hyrim, Shepherd"],
        parents1: ["Stanley Stark, Dorothy Stark"],
        parents2: ["Mark Hannon, Robin Hannon"],
    },
    {
        name: "Stonewall",
    },
    {
        name: "Truck",
    },
    {
        name: "Hyrim",
    },
    {
        name: "Shepherd",
    },
    {
        name: "Mark & Robin Hannon"
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
        familyphoto: "../../Art-Stuff/family-photos/Cindy.png",
    },
];
const navhistory = [];

function test(item) {

    const testH1 = document.getElementById('testH1');
    const logo = document.getElementById('logo');
    const image = document.getElementById('displayImg');
    const imgContainer = document.getElementById('Imgcontainer')
    const oldbuttons = imgContainer.querySelectorAll('.family-button');
    oldbuttons.forEach(oldBtn => oldBtn.remove());
    const description = document.getElementById('description')
    const childrenList = document.getElementById('children')
    const parentsList1 = document.getElementById('parent1')
    const parentsList2 = document.getElementById('parent2')
    testH1.innerText = item.name;
    logo.innerText = item.name;
    if (item.familyphoto) {
      image.src = item.familyphoto;
    
      item.photobuttons.forEach(button => {
        const itemelement = document.createElement('div');
        itemelement.classList.add('family-button');

        itemelement.style.top = button.top;
        itemelement.style.left = button.left;
        itemelement.style.width = button.width;
        itemelement.style.height = button.height;

        itemelement.addEventListener('click', () => {
            let selectedFamilymember = familyMembers.find(member => member.name === button.name)
            if (selectedFamilymember) {
                navhistory.push(item)
                 test(selectedFamilymember)
            }
        });
        imgContainer.appendChild(itemelement);
    });
    } else {
        image.src = "";
    }
}
const urlParams = new URLSearchParams(window.location.search);
const familyIndex = urlParams.get('Person')

if (familyIndex !== null) {
    let selectedFamilymember = familyMembers.find(member => member.name === familyIndex);
    if (selectedFamilymember) {
        test(selectedFamilymember)
    } else {
        console.log("Family Member not found with name:", familyIndex);
    }
};

const closeButton = document.getElementById('close-button');

closeButton.addEventListener('click', () => {
    if (navhistory.length > 0) {
        const previousMember = navhistory.pop();
        test(previousMember)
    } else {
        window.location.href = "../../index.html";
    }
});