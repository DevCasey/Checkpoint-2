import React from 'react';
import '../App';



export default class LoginPage extends React.Component {

    state = {
        value: '',
        username: '',
        password: ''
    }
    handleChange = this.handleChange.bind(this);
    // login = this.login.bind(this);


    handleChange(e) {
        const state = {...this.state}
        state[e.target.name] = e.target.value
        this.setState(state)
    }

    login = (event) => {
        alert('Name was submitted' + this.state.value)
        document.cookie="loggedIntrue;Max-age=60*1000";
        window.location.replace('/');
        event.preventDefault();
    }




    render() {
        return (
            <div>
                <div className="login-container">
                    <form>
                        <label className="login-info-container" onSubmit={this.login}>
                            
                            <p><input className="username-input" type="text" value={this.state.username} onChange={this.handleChange} placeholder="Username" /></p>
                            <p><input className="password-input" type="password" value={this.state.password} placeholder="Password" /></p>
                        </label>
                        <input className="password-input" type="submit" value="submit"/>
                    </form>
                </div>
            </div>
        )
    }
}