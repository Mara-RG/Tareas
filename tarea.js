const imag_url = "https://placehold.co/400"

const users = [
    {
        id: 1,
        user_name: 'User1',
        description: 'lorem ipsum',
        age: 46,
        fav_music: {
            singers: [
                'Band 1', 'Band 2', 'Band 3', 'Band 4'
            ]
        }
    },
    {
        id: 2,
        user_name: 'User LastName',
        description: 'Lorem lorem lorem',
        age: 23,
        fav_music: {
            singers: ['Band 1', 'Band 2', 'Band 3', 'Band 4'
            ]
        }
    }
];


    function crateUserCard(user){
        const card = document.getElementById("card-container");

        const cardImgContainer = document.getElementById("card-img-container");

        const userName = document.createElement(`h3`);
        userName.textContent = user.user_name;

        const age = document.createElement(`p`);
        age.textContent = `Edad: ${user.age}`;

        const description = document.createElement(`p`)
        age.textContent = `Descripción: ${user.description}`;

        const favmusic = document.createElement(`p`);
        user.fav_music.singers.forEach(singer => {
            const listItem = document.createElement(`p`);
            favmusic.appendChild(listItem)
        });

        card.appendChild(userName);
        card.appendChild(age);
        card.appendChild(description);
        card.appendChild(favmusic)
        
        return card;

    }

    function renderUserCards(users) {
        const container = document.getElementById(`card-container`);
        container.innerHTML = ``;
        users.forEach(user => {
            const userCard = createUseCard(user);
            container.appendChild(userCard);
        });
            }
    
            document.addEventListener(`DOMContentLoaded`, () => {renderUserCards(users);
        })
    


        
    