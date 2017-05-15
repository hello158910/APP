import React, { Component } from 'react';
import * as firebase from 'firebase';
import { LoginStack } from './Router';

class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCiuvs5QpAdWHaMZYjiLRzyTrAEfhGhJLU",
      authDomain: "angrycat-80bcc.firebaseapp.com",
      databaseURL: "https://angrycat-80bcc.firebaseio.com",
      projectId: "angrycat-80bcc",
      storageBucket: "angrycat-80bcc.appspot.com",
      messagingSenderId: "482581199799"
   });
  }

  render() {
    return (
      <LoginStack />
    );
  }
}


export default App;
