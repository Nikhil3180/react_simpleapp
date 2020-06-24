import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';


const API_KEY = 'AIzaSyD-gojEAlCnqJ3iAMEUR7NwZNbOicYgvwY';

YTSearch({key : API_KEY, term : 'asal mei'}, function(data){
  console.log(data)
});

// create a new component. This component produce some HTML

// const App = () => {
//   return (<div>
//     <SearchBar />
//   </div>);
// }

class App extends Component {

  constructor(props){
    super(props);

    this.state = {videos: []};

    YTSearch({key : API_KEY, term : 'asal mei'}, (data) => {
      this.setState({videos : data});
      console.log(data)
    });

  }

  render() {
    return (
    <div>
      <SearchBar />
      <VideoDetail video={this.state.videos[0]} />
      <VideoList videos={this.state.videos} />
    </div>
    );
  }
}

// Take this components's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));