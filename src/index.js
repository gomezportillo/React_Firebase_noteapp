import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase')
require('firebase/firestore')

firebase.initializeApp({
  apiKey: "AIzaSyDwkA5jyLKscB1hZasPzct6EsWsi3pcQ-4",
  authDomain: "noteapp-d1a4b.firebaseapp.com",
  databaseURL: "https://noteapp-d1a4b.firebaseio.com",
  projectId: "noteapp-d1a4b",
  storageBucket: "noteapp-d1a4b.appspot.com",
  messagingSenderId: "304585345640",
  appId: "1:304585345640:web:71188cf4f0165ed9"
})

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
