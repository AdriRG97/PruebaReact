import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase';


firebase.initializeApp({
    apiKey: "AIzaSyBhSIAuRafH0WAsjlpL3tu-f4R8buWZ4Jg",
    authDomain: "pruebareact-1c74e.firebaseapp.com",
    databaseURL: "https://pruebareact-1c74e.firebaseio.com",
    projectId: "pruebareact-1c74e",
    storageBucket: "pruebareact-1c74e.appspot.com",
    messagingSenderId: "705486705650"
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
