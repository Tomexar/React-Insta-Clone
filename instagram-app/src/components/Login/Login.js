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
        this.setState({ [event.target.name]: event.target.value });
    };

    handlebutton = event => {
        let user = this.state.username;
        localStorage.setItem('user', user);

    };

    render() {
        return (
            <form className='login'>
                <input type='text' placeholder='username' name = 'username' value={this.state.username} onChange={this.handleLogin} />
                <input type='text' placeholder='password'  name = 'password'value={this.state.password} onChange={this.handleLogin} />
                <button onClick={this.handlebutton}>Log In</button>
            </form>
        )
    }
}

export default Login;