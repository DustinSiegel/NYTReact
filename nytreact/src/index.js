//Note: This is a Componant(...something that ends up on the screen), REMEMBER: Only one componant per file!

// Calls the react and react-dom files from the package.json to grab componants to nest and render them.
import React from 'react';
import ReactDOM from 'react-dom';

// A variable to represent the youtube api key (may be the wrong key, if so, rewatch YOuTube Searcj API SignUp)
const API_KEY = '';

// Create a new componants. A componant or view should produce html.
const App = () => {
  return <div>Hi!</div>;
}

// Take this componants generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
