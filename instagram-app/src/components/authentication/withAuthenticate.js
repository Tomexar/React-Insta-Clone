import React from 'react';


const withAuthenticate = PostPage => Login =>
    class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                loggedIn: false
            };
        }

        componentDidMount() {
            if (localStorage.getItem('user')) {
                this.setState({ isLoggedIn: true });
            } else {
                this.setState({ isLoggedIn: false });
            }
        };



        render() {
            if (this.state.loggedIn) return <PostPage/>;
            else return <Login/>
        }
    };


export default withAuthenticate;