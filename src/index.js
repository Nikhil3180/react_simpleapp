import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';


const API_KEY = 'AIzaSyD-gojEAlCnqJ3iAMEUR7NwZNbOicYgvwY';

YTSearch({key : API_KEY, term : 'surfboards'}, function(data){
  console.log(data)
});

// create a new component. This component produce some HTML

const App = () => {
  return (<div>
    <SearchBar />
  </div>);
}

// Take this components's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));