const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});

const navhistory = [];
const familyMembers  = [
    {
        name: "Allison",
        familyphoto: "",
        photobuttons: [  
        ],
        descriprion: "description needed",
        children: [],
        parents: [
            {
                person: "Allison's",
                father: 'Stanley Stark',
                mother: 'Dorothy Stark',
            },
        ],
    },
    {
        name: "Ammon & Jeanelle Stark",
        altNames: ["Ammon Stark", "Jeanelle Stark", "Ammon",],
        familyphoto: "../../Art-Stuff/family-photos/Ammon&jeanelleStark.png",
        photobuttons: [
            {
                name: "Stonewall Stark",
                top: "48%",
                left: "85%",
                width: "35px",
                height: "40px",
            },
            {
                name: "Truck Stark",
                top: "55%",
                left: "35%",
                width: "35px",
                height: "60px",
            },
            {
                name: "Hyrim Stark",
                top: "30%",
                left: "42%",
                width: "35px",
                height: "50px",
            },
            {
                name: "Shepherd Stark",
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
        descriprion: "hello there is no desription yet",
        children: ["Stonewall Stark", "Truck Stark", "Hyrim Stark", "Shepherd Stark"],
        parents: [
            {
                person: "Ammon's",
                father: 'Stanley Stark',
                mother: 'Dorothy Stark',
            },
            {
                person: "Jeanelle's",
                father: 'Mark Hannon',
                mother: 'Robin Hannon',
            }
        ],
    },
    {
        name: "Stonewall Stark",
        familyphoto: "",
        descriprion: "There is no description for stonewall yet",
        parents: [
            {
                father: "Ammon Stark",
                mother: "Jeanelle Stark",
            }
        ],
    },
    {
        name: "Truck Stark",
        familyphoto: "",
        descriprion: "No description",
        parents: [
            {
                father: "Ammon Stark",
                mother: "Jeanelle Stark",
            }
        ],
    },
    {
        name: "Hyrim Stark",
        familyphoto: "",
        descriprion: "Hello, my name is Hyrim. I am one of Ammon and Jeanelle Stark's sons, I was born in 2009, which makes me 17 years old in 2026. I have many hobbies, including sketching, reading webnovels, and making websites. Having learned that I could build websites from my brother, Stonewall, my grandfather (Stanley Stark) asked if I would be willing to help him make one. I do hope you like the website I have built. ",
        parents: [
            {
                father: "Ammon Stark",
                mother: "Jeanelle Stark",
            }
        ],
    },
    {
        name: "Shepherd Stark",
        familyphoto: "",
        descriprion: "No description",
        parents: [
            {
                father: "Ammon Stark",
                mother: "Jeanelle Stark",
            }
        ],
    },
    {
        name: "Mark & Robin Hannon",
        altNames: ["Mark Hannon", "Robin Hannon",],
        familyphoto: "",
        photobuttons: [  
        ],
        descriprion: "description needed",
        children: [],
        parents: [
            {
                person: "Mark's",
                father: '',
                mother: '',
            },
             {
                person: "Robin's",
                father: '',
                mother: '',
            },
        ],
    },
    {
        name: "Ben",
        familyphoto: "",
        photobuttons: [  
        ],
        descriprion: "description needed",
        children: [],
        parents: [
            {
                person: "Ben's",
                father: 'Stanley Stark',
                mother: 'Dorothy Stark',
            },
        ],
    },
    {
        name: "Theresa",
        familyphoto: "",
        photobuttons: [  
        ],
        descriprion: "description needed",
        children: [],
        parents: [
            {
                person: "Theresa's",
                father: 'Stanley Stark',
                mother: 'Dorothy Stark',
            },
        ],
    },
    {
        name: "Stanley & Dorothy Stark",
        altNames: ["Stanley Stark", "Dorothy Stark", "Dorothy",],
        familyphoto: "",
        photobuttons: [
           
        ],
        descriprion: "description needed",
        children: ["Allison", "Ammon", "Ben", "Cindy", "Jeanette", "Kyle", "Rebekah", "Rob", "Stan (Gooby)", "Suzy", "Theresa", "Tommy"],
        parents: [
            {
                person: "Stanley's",
                father: 'Thomas Stark',
                mother: 'Eunice Stark',
            },
            {
                person: "Dorothy's",
                father: 'Lawrence Shoemaker',
                mother: 'Elizabeth Shoemaker',
            }
        ],
    },
    {
        name: "Tom & Eunice Stark",
        altNames: ["Thomas Stark", "Eunice Stark",],
        familyphoto: "../../Art-Stuff/family-photos/Tom-Eunice.png",
        photobuttons: [
        ],
        descriprion: "description needed",
        children: ["Jacque", "Pat", "Stanley Stark"],
        parents: [
            {
                person: "Thomas's",
                father: 'George Stark',
                mother: 'Alta Hastain',
            },
            {
                person: "Eunice's",
                father: 'Howard Moody',
                mother: 'Ella Moody',
            }
        ],
    },
    {
        name: "Larry & Elizabeth Shoemaker",
        altNames: ["Lawrence Shoemaker", "Elizabeth Shoemaker",],
        familyphoto: "../../Art-Stuff/family-photos/Larry&Elizabeth.png",
        photobuttons: [
        ],
        descriprion: "description needed",
        children: ["Frances", "Edna", "Dorothy", "Betty"],
        parents: [
            {
                person: "Larry's",
                father: 'Fred Shoemaker',
                mother: 'Margaret Shoemaker',
            },
            {
                person: "Elizabeth's",
                father: 'Francis Davis',
                mother: 'Winifred Davis',
            }
        ],
    },
    {
        name: "Rob & Stacie Stark",
        altNames: ["Rob", "Rob Stark", "Stacie Stark"],
        familyphoto: "../../Art-Stuff/family-photos/Rob.png",
        photobuttons: [  
             {
                name: "Amanda Stark",
                top: "45%",
                left: "33%",
                width: "60px",
                height: "60px",
            },
            {
                name: "Jessica Stark",
                top: "45%",
                left: "60%",
                width: "60px",
                height: "60px",
            },
        ],
        descriprion: "description needed",
        children: ["Amanda Stark", "Jessica Stark"],
        parents: [
            {
                person: "Rob's",
                father: 'Stanley Stark',
                mother: 'Dorothy Stark',
            },
            {
                person: "Stacie's",
                father: '',
                mother: '',
            },
        ],
    },
    {
        name: "Amanda Stark",
        familyphoto: "../../Art-Stuff/family-photos/Rob.png",
        photobuttons: [  
            {
                name: "Stacie Stark",
                top: "20%",
                left: "35%",
                width: "60px",
                height: "60px",
            },
            {
                name: "Rob Stark",
                top: "20%",
                left: "70%",
                width: "60px",
                height: "60px",
            },
            {
                name: "Jessica Stark",
                top: "45%",
                left: "60%",
                width: "60px",
                height: "60px",
            },
        ],
        descriprion: "description needed",
        children: [],
        parents: [
            {
                father: 'Rob Stark',
                mother: 'Stacie Stark',
            },
        ],
    },
    {
        name: "Jessica Stark",
        familyphoto: "../../Art-Stuff/family-photos/Rob.png",
        photobuttons: [  
            {
                name: "Stacie Stark",
                top: "20%",
                left: "35%",
                width: "60px",
                height: "60px",
            },
            {
                name: "Rob Stark",
                top: "20%",
                left: "70%",
                width: "60px",
                height: "60px",
            },
             {
                name: "Amanda Stark",
                top: "45%",
                left: "33%",
                width: "60px",
                height: "60px",
            },
        ],
        descriprion: "description needed",
        children: [],
        parents: [
            {
                father: 'Rob Stark',
                mother: 'Stacie Stark',
            },
        ],
    },
    {
        name: "Stan (Gooby)",
        familyphoto: "",
        photobuttons: [  
        ],
        descriprion: "description needed",
        children: [],
        parents: [
            {
                person: "Stan's",
                father: 'Stanley Stark',
                mother: 'Dorothy Stark',
            },
        ],
    },
    {
        name: "Tommy",
        familyphoto: "",
        photobuttons: [  
        ],
        descriprion: "description needed",
        children: [],
        parents: [
            {
                person: "Tommy's",
                father: 'Stanley Stark',
                mother: 'Dorothy Stark',
            },
        ],
    },
    {
        name: "Kyle",
        familyphoto: "",
        photobuttons: [  
        ],
        descriprion: "description needed",
        children: [],
        parents: [
            {
                person: "Kyle's",
                father: 'Stanley Stark',
                mother: 'Dorothy Stark',
            },
        ],
    },
    {
        name: "Suzy & Chris Dunham",
        altNames: ["Suzy", "Chris Dunham",],
        familyphoto: "../../Art-Stuff/family-photos/Suzy.png",
        photobuttons: [  
            {
                name: "Krystal",
                top: "25%",
                left: "24%",
                width: "60px",
                height: "60px",
            },
            {
                name: "Whitney",
                top: "22%",
                left: "60%",
                width: "60px",
                height: "60px",
            },
            {
                name: "Jared",
                top: "68%",
                left: "63%",
                width: "60px",
                height: "60px",
            },
        ],
        descriprion: "description needed",
        children: ["Krystal", "Whitney", "Jared"],
        parents: [
            {
                person: "Suzy's",
                father: 'Stanley Stark',
                mother: 'Dorothy Stark',
            },
            {
                person: "Chris's",
                father: "",
                mother: "",
            },
        ],
    },
    {
        name: "Krystal",
        familyphoto: "../../Art-stuff/family-photos/Suzy.png",
        photobuttons: [  
            {
                name: "Suzy",
                top: "52%",
                left: "52%",
                width: "60px",
                height: "60px",
            },
            {
                name: "Chris Dunham",
                top: "46%",
                left: "22%",
                width: "60px",
                height: "60px",
            },
            {
                name: "Whitney",
                top: "22%",
                left: "60%",
                width: "60px",
                height: "60px",
            },
            {
                name: "Jared",
                top: "68%",
                left: "63%",
                width: "60px",
                height: "60px",
            },
        ],
        descriprion: "description needed",
        parents: [
            {
                father: 'Chris Dunham',
                mother: 'Suzy',
            },
        ],
    },
    {
        name: "Whitney",
        familyphoto: "../../Art-stuff/family-photos/Suzy.png",
        photobuttons: [  
            {
                name: "Suzy",
                top: "52%",
                left: "52%",
                width: "60px",
                height: "60px",
            },
            {
                name: "Chris Dunham",
                top: "46%",
                left: "22%",
                width: "60px",
                height: "60px",
            },
             {
                name: "Krystal",
                top: "25%",
                left: "24%",
                width: "60px",
                height: "60px",
            },
            {
                name: "Jared",
                top: "68%",
                left: "63%",
                width: "60px",
                height: "60px",
            },
        ],
        descriprion: "description needed",
        parents: [
            {
                father: 'Chris Dunham',
                mother: 'Suzy',
            },
        ],
    },
    {
        name: "Jared",
        familyphoto: "../../Art-stuff/family-photos/Suzy.png",
        photobuttons: [  
            {
                name: "Suzy",
                top: "52%",
                left: "52%",
                width: "60px",
                height: "60px",
            },
            {
                name: "Chris Dunham",
                top: "46%",
                left: "22%",
                width: "60px",
                height: "60px",
            },
             {
                name: "Krystal",
                top: "25%",
                left: "24%",
                width: "60px",
                height: "60px",
            },
            {
                name: "Whitney",
                top: "22%",
                left: "60%",
                width: "60px",
                height: "60px",
            },
        ],
        descriprion: "description needed",
        parents: [
            {
                father: 'Chris Dunham',
                mother: 'Suzy',
            },
        ],
    },
    {
        name: "Rebekah",
        familyphoto: "",
        photobuttons: [  
        ],
        descriprion: "description needed",
        children: [],
        parents: [
            {
                person: "Rebekah's",
                father: 'Stanley Stark',
                mother: 'Dorothy Stark',
            },
        ],
    },
    {
        name: "Jeanette",
        familyphoto: "",
        photobuttons: [  
        ],
        descriprion: "description needed",
        children: [],
        parents: [
            {
                person: "Jeanette's",
                father: 'Stanley Stark',
                mother: 'Dorothy Stark',
            },
        ],
    },
    {
        name: "Cindy",
        familyphoto: "../../Art-Stuff/family-photos/Cindy.png",
        photobuttons: [  
        ],
        descriprion: "description needed",
        parents: [
            {
                father: 'Stanley Stark',
                mother: 'Dorothy Stark',
            },
        ],
    },
];

function test(item) {
    window.scrollTo(0, 0);
    const testH1 = document.getElementById('testH1');
    const logo = document.getElementById('logo');
    const image = document.getElementById('displayImg');
    const imgContainer = document.getElementById('Imgcontainer')
    const oldbuttons = imgContainer.querySelectorAll('.family-button');
    oldbuttons.forEach(oldBtn => oldBtn.remove());
    const memberDescription = document.getElementById('descriptionZone');
    const childrenList = document.getElementById('children');
    childrenList.classList.remove('hidden')
    const oldlistedChidren = childrenList.querySelectorAll('.listedChildren');
    oldlistedChidren.forEach(oldChild => oldChild.remove());
    const parentContainer = document.getElementById('parentContainer');
    parentContainer.classList.remove('hidden')
    const parentsList1 = document.getElementById('parent1');
    parentsList1.innerHTML = "";
    const parentsList2 = document.getElementById('parent2');
    parentsList2.innerHTML = "";
    testH1.innerText = item.name;
    logo.innerText = item.name;
    memberDescription.innerHTML = item.descriprion;
    if (item.familyphoto) {
      image.src = item.familyphoto;
      if(item.photobuttons){
      item.photobuttons.forEach(button => {
        const itemelement = document.createElement('div');
        itemelement.classList.add('family-button');
        itemelement.style.top = button.top;
        itemelement.style.left = button.left;
        itemelement.style.width = button.width;
        itemelement.style.height = button.height;
        itemelement.addEventListener('click', () => {
            let selectedFamilymember = familyMembers.find(member => member.name === button.name  || (member.altNames && member.altNames.includes(button.name)))
            if (selectedFamilymember) {
                navhistory.push(item)
                 test(selectedFamilymember)
            }
        });
        imgContainer.appendChild(itemelement);
    });
}
    } else {
        image.src = "";
    };

    if(item.children) {
        item.children.forEach(child =>{
            const listchildren = document.createElement('li');
            listchildren.classList.add('listedChildren');
            listchildren.innerText = `${child}`;
            childrenList.appendChild(listchildren);
            listchildren.addEventListener('click', () => {
                 let selectedFamilymember = familyMembers.find(member => member.name === child || (member.altNames && member.altNames.includes(child)))
            if (selectedFamilymember) {
                navhistory.push(item)
                 test(selectedFamilymember)
            }
            });
       });
    } else {
        childrenList.classList.add('hidden')
    };

    if(item.parents) {
        item.parents.forEach((object, index) =>{
            if (item.parents.length < 2) {
                parentsList2.style.display = "none"
            } else {
                parentsList2.style.display = "flex"
            }
            const personsParents = document.createElement('h2')
            personsParents.classList.add('personsParent')
            personsParents.innerText = object.person;
            const personsfather = document.createElement('li');
            const personsmother = document.createElement('li');
            personsfather.classList.add('listedParent')
            personsmother.classList.add('listedParent')
            personsfather.innerText = object.father;
            personsmother.innerText = object.mother;

            personsfather.addEventListener('click', () => {
                    let selectedFamilymember = familyMembers.find(member => member.name === object.father  || (member.altNames && member.altNames.includes(object.father)));
                    if (selectedFamilymember) {
                    navhistory.push(item)
                    test(selectedFamilymember)
                  };  
            });
            personsmother.addEventListener('click', () => {
               
                    let selectedFamilymember = familyMembers.find(member => member.name === object.mother || (member.altNames && member.altNames.includes(object.mother)));
                    if (selectedFamilymember) {
                    navhistory.push(item)
                    test(selectedFamilymember)
                  };
             
            });


            if(index === 0) {
                if(object.person) parentsList1.appendChild(personsParents);
                parentsList1.appendChild(personsfather);
                parentsList1.appendChild(personsmother);
            } else {
                if(object.person) parentsList2.appendChild(personsParents);
                parentsList2.appendChild(personsfather);
                parentsList2.appendChild(personsmother);
            };
        });
    } else {
        parentContainer.classList.add('hidden')
    };
};

const urlParams = new URLSearchParams(window.location.search);
const familyIndex = urlParams.get('Person')
if (familyIndex !== null) {
    let selectedFamilymember = familyMembers.find(member => member.name === familyIndex || (member.altNames && member.altNames.includes(familyIndex)));
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