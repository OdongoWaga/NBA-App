import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDefYCyuYqGPnqmycFqZS_UMxI3yL7yhU4",
    authDomain: "nba-app-6fcbc.firebaseapp.com",
    databaseURL: "https://nba-app-6fcbc.firebaseio.com",
    projectId: "nba-app-6fcbc",
    storageBucket: "nba-app-6fcbc.appspot.com",
    messagingSenderId: "276310824101"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseArticles = firebaseDB.ref('articles');
const firebaseTeams = firebaseDB.ref('teams');
const firebaseVideos = firebaseDB.ref('videos');

const firebaseLooper = (snapshot) => {
    const data = [];
    snapshot.forEach((childSnapshot)=>{
        data.push({
            ...childSnapshot.val(),
            id:childSnapshot.key
        })
    });
    return data;
}


export {
    firebase,
    firebaseDB,
    firebaseArticles,
    firebaseVideos,
    firebaseTeams,
    firebaseLooper
}