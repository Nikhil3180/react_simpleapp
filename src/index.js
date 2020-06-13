import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';


const API_KEY = 'AIzaSyD-gojEAlCnqJ3iAMEUR7NwZNbOicYgvwY';

// create a new component. This component produce some HTML

const App = () => {
  return (<div>
    <SearchBar />
  </div>);
}

// Take this components's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));