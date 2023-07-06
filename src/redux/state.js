export let state = {
    messagesPage:{
        messageData: [
                {
                    id: 0,
                    text: 'Hi',
                },
                {
                    id: 1,
                    text: 'How are you?',
                },
                {
                    id: 2,
                    text: 'yo',
                },
                {
                    id: 3,
                    text: 'bue',
                },
            ],
            dialogsData: [
                {
                    id: '0',
                    name: 'Ivan',
                    key: 0,
                },
                {
                    id: '1',
                    name: 'Sveta',
                    key: 1, 
                },
                {
                    id: '2',
                    name: 'Vlad',
                    key: 2,
                },
                {
                    id: '3',
                    name: 'Nikita',
                    key: 3,
                },
                {
                    id: '4',
                    name: 'Seva',
                    key: 4,
                },
            ],
    },
    profilePage: {
        newPostText: '',
        postsData: [
            {
                id: 0,
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi beatae, unde sed atque consequuntur voluptates excepturi molestias, vero odio saepe quod quidem sit harum! Possimus nesciunt earum nihil enim a!',
                likesCount: 34,
                imgLink: 'https://img.freepik.com/free-icon/user_318-159711.jpg',
            },
            {
                id: 1,
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi beatae, unde sed atque consequuntur voluptates excepturi molestias, vero odio saepe quod quidem sit harum! Possimus nesciunt earum nihil enim a!',
                likesCount: 78,
          imgLink: 'https://img.freepik.com/free-icon/user_318-159711.jpg',
        },
        {
            id: 2,
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi beatae, unde sed atque consequuntur voluptates excepturi molestias, vero odio saepe quod quidem sit harum! Possimus nesciunt earum nihil enim a!',
            likesCount: 19,
            imgLink: 'https://img.freepik.com/free-icon/user_318-159711.jpg',
        },
        {
            id: 3,
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi beatae, unde sed atque consequuntur voluptates excepturi molestias, vero odio saepe quod quidem sit harum! Possimus nesciunt earum nihil enim a!',
            likesCount: 25,
            imgLink: 'https://img.freepik.com/free-icon/user_318-159711.jpg',
        },
        {
            id: 4,
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi beatae, unde sed atque consequuntur voluptates excepturi molestias, vero odio saepe quod quidem sit harum! Possimus nesciunt earum nihil enim a!',
            likesCount: 125,
            imgLink: 'https://img.freepik.com/free-icon/user_318-159711.jpg',
        },
        {
            id: 5,
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi beatae, unde sed atque consequuntur voluptates excepturi molestias, vero odio saepe quod quidem sit harum! Possimus nesciunt earum nihil enim a!',
            likesCount: 125,
            imgLink: 'https://img.freepik.com/free-icon/user_318-159711.jpg',
        },
    ],
    },
}
let renderEntireTree = () => {
    console.log('state changed')
}

export let addPost = () => {
    let newPost = {
        id: 5,
        text: state.profilePage.newPostText,
        likesCount: 0,
        imgLink: 'https://img.freepik.com/free-icon/user_318-159711.jpg',
    };
    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = '';
    renderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    renderEntireTree(state);
}


export const subscribe = (observer) => {
    renderEntireTree = observer; // patter nobserver 
}


// store - oop object 