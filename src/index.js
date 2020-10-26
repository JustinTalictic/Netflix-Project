import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles';
import { App } from './App';
import { FirebaseContext } from './context/firebase';
import * as Firebase from 'firebase';

import * as serviceWorker from './serviceWorker';

//import { seedDatabase } from './seed';

const firebaseConfig = {
    apiKey: 'AIzaSyC-oqLONd3N5xB2hJXlCr-R4XhdDgxiqCw',
    authDomain: 'netflix-project-66043.firebaseapp.com',
    databaseURL: 'https://netflix-project-66043.firebaseio.com',
    projectId: 'netflix-project-66043',
    storageBucket: 'netflix-project-66043.appspot.com',
    messagingSenderId: '701172145806',
    appId: '1:701172145806:web:40681e1b23a5c4250073df',
};

const firebase = Firebase.initializeApp(firebaseConfig);

//seedDatabase(firebase);

ReactDOM.render(
    <React.StrictMode>
        <FirebaseContext.Provider value={{ firebase }}>
            <GlobalStyles />
            <App />
        </FirebaseContext.Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
