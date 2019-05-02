import React from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage'
import withAuthenticate from './components/authentication/withAuthenticate';
import Login from './components/Login/Login';



class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <ComponentFromWithAuthenticate />
      </div>
    );
  }


}

let ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login)

export default App;
