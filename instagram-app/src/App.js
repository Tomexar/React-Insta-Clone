import React from 'react';
import './App.css';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar'

import dummyData from './dummy-data';




class App extends React.Component {
  constructor(){
    super();
    this.state = {
      dummy: dummyData
    };

  }


  render(){
    return (
      <div className="App">
      <h1>hello</h1>
      <SearchBar />
      <PostContainer dummy = {this.state.dummy} />
      </div>
    );
  }

}

export default App;
