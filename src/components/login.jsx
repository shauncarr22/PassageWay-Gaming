import React, { Component, useContext, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import firebase from '../firebase';
import { AuthContext } from '../AuthContext.jsx'

const Login = () => {
    let reRoute = useHistory();
    const context = useContext(AuthContext);
    const { isAuth, loggedIn } = context;

    if(isAuth) reRoute.push('/profile');

    const [email,setEmail] = useState("");
    const [emailClass, setEmailClass] = useState('');
    const [password, setPassword] = useState('');
    const [pwClass, setPwClass] = useState('');
    
    const [newUser,setNewUserStatus] = useState(false);

    const authenticater = (email, password) => {
        if(email.length > 0 && password.length > 0){
            let prom = new Promise ((resolve, reject) => {
                resolve(firebase.login(email,password))
            })
            prom.then(() => {
                let info = firebase.auth.currentUser.uid
                loggedIn(info)
            }).catch(error => {
                console.error(error);
                error.code === "auth/user-not-found" ? setEmailClass("email-error") : setEmailClass("email");
                error.code === "auth/wrong-password" ? setPwClass('password-error') : setPwClass('password');
            });
        };
    };
    if(newUser === true){
        return <Redirect push to="/signup"></Redirect>
    } else {
        return (
                <div>
                    <img className="Logo_login" src='LogoNew.png' alt=""></img>

                <div className="Container_login">
                    <p className="Email_login">Email</p>
                    <input className="Email_login_input"></input>
                    <p className="Pass_login">Password</p>
                    <input className="Pass_login_input"></input>
                    <button className="button_login">Login uwu</button>
                </div>
            </div> 
        )
    }
};

export default Login



