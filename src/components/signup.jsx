import React, { useState, useEffect, useContext} from 'react';
import { AuthContext } from '../AuthContext.jsx';
import { useHistory } from 'react-router-dom';
import firebase from '../firebase';
import Axios from 'axios';

const Signup = () => {

    // let reRoute = useHistory();

    // const context = useContext(AuthContext);
    // const { isAuth, loggedIn, loggedOut } = context;

    // if(isAuth) reRoute.push('/profile');

    return(
        <div className='Container_SignUp'>
            <div>
                <p className="UserName">Username</p>
                <input className="Username_input" type="text" name="username" placeholder="Lask1ey" value="username"></input>
            </div>
            <div>
                <p className="Email">Email</p>
                <input className="Email_input" type="text" name="email" placeholder="usersemail@gmail.com" value="email"></input>
            </div>
            <div>
                <p className="Password">Password</p>
                <input className="Password_input" type='text' name="password" placeholder="ExaMplePass222!!" value='password'></input>
            </div>
            <div>
                <p className="Twitch">Twitch</p>
                <input className="Twitch_input" type='text' name='twitch' placeholder='twitch' value='twitch'></input>
            </div>
            <div>
                <p className="Youtube">Youtube</p>
                <input className="Youtube_input" type="text" name="youtube" placeholder='youtube' value='yotube'></input>
            </div>
            <div>
                <p className="Game">Game currently playing</p>
                <input className='Game_input' type='text' name='game' placeholder='name a game uwu' value='game'></input>
            </div>
        </div>
    );

};




export default Signup