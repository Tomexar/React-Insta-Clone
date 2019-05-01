import React from 'react';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    handleLogin = event => {
        this.setState({ [event.target.name]: event.target.vale });
    };


    toggleLogin = event => {
        event.preventDefault();
        let user = this.state.username;
        if (localStorage.getitem('user')) {
            localStorage.removeItem('user');
            this.setState({ isLoggedIn: false });
        }
        else {
            localStorage.setItem('user', user);
            this.setState({ isLoggedIn: true });
        }
    }

    render() {
        return (
            <form className='login'>
                <input type='text' placeholder='username' />
                <input type='text' placeholder='password' />
                <button>Log In</button>
            </form>
        )
    }
}

export default Login;