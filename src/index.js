import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as firebase from 'firebase';
import App from './App';

const firebaseConfig = {
  apiKey: 'AIzaSyClViBygyvRmhfWcInnnP6yXAKn6JFuJGo',
  authDomain: 'clever-to-do-list-29817.firebaseapp.com',
  projectId: 'clever-to-do-list-29817',
  storageBucket: 'clever-to-do-list-29817.appspot.com',
  messagingSenderId: '910035101196',
  appId: '1:910035101196:web:c4e0a2b9c9dbdb48e1b029',
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.querySelector('#root'));
