//Note: This is a Componant(...something that ends up on the screen), REMEMBER: Only one componant per file!
// This file is the parent file for the componants. It contains constructers that put the componants on the page
// Calls the react and react-dom files from the package.json to grab componants to nest and render them.
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// A variable to represent the youtube api key (may be the wrong key, if so, rewatch YOuTube Searcj API SignUp)
const API_KEY = '9b0b25a883344915985c7493a825b633';

// Create a new componants. A componant or view should produce html.
class App extends Component {
  render() {
    return (
      <div>Updated Hi!</div>
    )
  }
}

// Take this componants generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
