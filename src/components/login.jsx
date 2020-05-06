import React, {Component} from 'react';

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {

        };
    };

    render(){
        return(
            <div className="Container_login">
                <p className="Email_login">Email</p>
                <input className="Email_login_input"></input>
                <p className="Pass_login">Password</p>
                <input className="Pass_login_input"></input>
                <button className="button_login">Login uwu</button>
            </div>
        );
    };
};

export default Login