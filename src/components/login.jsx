import React, { useContext, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import firebase from '../firebase';
import { AuthContext } from '../AuthContext.jsx'
import Logo from '../LogoNew.png'


const Login = () => {
    let reRoute = useHistory();
    const context = useContext(AuthContext);
    const { isAuth, loggedIn } = context;

    if(isAuth){
        reRoute.push('/home');
    };

    const [email,setEmail] = useState("");
    const [emailClass, setEmailClass] = useState('');
    const [password, setPassword] = useState('');
    const [pwClass, setPwClass] = useState('');
    
    const [newUser,setNewUserStatus] = useState(false);

    const authenticater = (email, password) => {
        // e.preventDefault()
        if(email.length > 0 && password.length > 0){
            let prom = new Promise ((resolve, reject) => {
                resolve(firebase.login(email,password))
            })
            prom.then(() => {
                let info = firebase.auth.currentUser.uid
                loggedIn(info)
            })
            .catch((err) => {
                console.error(err);
                err.code === "auth/user-not-found" ? setEmailClass("email-error") : setEmailClass("email");
                err.code === "auth/wrong-password" ? setPwClass('password-error') : setPwClass('password');
            });
        };
    };
    if(newUser === true){
        return <Redirect push to="/signup"></Redirect>
    } else {
        return (
            <div className="wrapper_Login">
                <div className="Container_login">
                    <p className="Email_login">Email</p>

                    <input className="Email_login_input"
                        name="email"
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    ></input>

                    <p className="Pass_login">Password</p>

                    <input className="Pass_login_input"
                        name="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    ></input>

                    <button className="button_login"
                        onClick={() => authenticater(email,password)}
                    >Login</button>
                </div>
                <div>
                    <img className="Logo_login" src={Logo} alt=""></img>
                </div>
            </div>
        );
    };
};

export default Login



