import React from 'react';
import './App.css';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar'

import dummyData from './dummy-data';




class App extends React.Component {
  constructor(){
    super();
    this.state = {
      dummy: []
    };

  }
  componentDidMount(){
    this.setState({dummy:dummyData});
  }


  render(){
    return (
      <div className="App">
      <SearchBar />
      <PostContainer dummy = {this.state.dummy} />
      </div>
    );
  }

}

export default App;
