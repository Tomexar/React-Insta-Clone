import React from 'react';
import './App.css';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar'

import dummyData from './dummy-data';




class App extends React.Component {
  constructor(){
    super();
    this.state = {
      dummy: [],
      searchPosts: []
    };

  }
  componentDidMount(){
    this.setState({dummy:dummyData});
    this.setState({searchPosts:dummyData});
  }
searchHandler = event =>{
  let Sdummy = this.state.dummy.filter(sUser =>{
    if (sUser.username.includes(event.target.value)){
      return sUser;
    }
  });
  this.setState({ searchPosts: Sdummy});
};

  render(){
    return (
      <div className="App">
      <SearchBar search = {this.searchHandler}/>
      <PostContainer dummy = {this.state.searchPosts} 
      />
      </div>
    );
  }

}

export default App;
