import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';


const API_KEY = 'AIzaSyD-gojEAlCnqJ3iAMEUR7NwZNbOicYgvwY';

// YTSearch({key : API_KEY, term : 'asal mei'}, (videos) =>{
//   this.setState({
//     videos: videos,
//     selectedVideo: videos[0]
//   });
// });

// create a new component. This component produce some HTML

// const App = () => {
//   return (<div>
//     <SearchBar />
//   </div>);
// }

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      videos: [],
    selectedVideo: null
    };
this.videoSearch('Iron Man')
  }

videoSearch(term){
  YTSearch({key : API_KEY, term :term}, (videos) => {
    this.setState({
      videos: videos,
      selectedVideo: videos[0]
    });
  });
}

  render() {

      const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

    return (
    <div>
      <SearchBar onSearchTermChange={videoSearch} />
      <VideoDetail video={this.state.selectedVideo} />
      <VideoList
      onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
      videos={this.state.videos} />
    </div>
    );
  }
}

// Take this components's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));