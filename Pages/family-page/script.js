const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});

const navhistory = [];
const familyMembers  = [
    {
        name: "Allison",
    },
    {
        name: "Ammon & Jeanelle Stark",
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
                father: 'Stanley',
                mother: 'Dorothy',
            },
            {
                person: "Jeanelle's",
                father: 'Mark Hannon',
                mother: 'Robin Hannon',
                link: 'Mark & Robin Hannon'
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
                link: "Ammon & Jeanelle Stark"
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
                link: "Ammon & Jeanelle Stark"
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
                link: "Ammon & Jeanelle Stark"
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
                link: "Ammon & Jeanelle Stark"
            }
        ],
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

function test(item) {
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
            let selectedFamilymember = familyMembers.find(member => member.name === button.name)
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
                 let selectedFamilymember = familyMembers.find(member => member.name === child)
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
                if (object.link) {
                    let selectedFamilymember = familyMembers.find(member => member.name === object.link);
                    if (selectedFamilymember) {
                    navhistory.push(item)
                    test(selectedFamilymember)
                  };
                } else {
                    let selectedFamilymember = familyMembers.find(member => member.name === object.father);
                    if (selectedFamilymember) {
                    navhistory.push(item)
                    test(selectedFamilymember)
                  };
                };   
            });
            personsmother.addEventListener('click', () => {
                if (object.link) {
                    let selectedFamilymember = familyMembers.find(member => member.name === object.link);
                    if (selectedFamilymember) {
                    navhistory.push(item)
                    test(selectedFamilymember)
                  };
                } else {
                    let selectedFamilymember = familyMembers.find(member => member.name === object.mother);
                    if (selectedFamilymember) {
                    navhistory.push(item)
                    test(selectedFamilymember)
                  };
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