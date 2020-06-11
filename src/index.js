import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyD-gojEAlCnqJ3iAMEUR7NwZNbOicYgvwY';

// create a new component. This component produce some HTML

const App = () => {
  return <div>Hi There!</div>;
}

// Take this components's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));