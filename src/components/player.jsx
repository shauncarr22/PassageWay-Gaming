import React, {useContext, useState, useEffect} from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';
import { Redirect, useHistory } from 'react-router-dom';
import firebase from '../firebase';
import { AuthContext } from '../AuthContext.jsx'

const Player = () =>  {
   
    const [user,setUser] = useState('');
    const [twitch,setTwitch] = useState('');
    const [youtube, setYoutube] = useState("");
    const [game,setGame] = useState('');

    let reRoute = useHistory();
    const context = useContext(AuthContext);
    const { isAuth, uid } = context;
    
    if(!isAuth) reRoute.push('/');

    useEffect(() => {
        const currUser = firebase.auth.currentUser.email
        getPlayer(currUser)
    },[uid]);

    const getPlayer = (curEmail) => {
        let URL = `https://passageway-gaming.herokuapp.com/getUser/`
        Axios.get(URL)
        .then((data) => {
            let findUser = data.data
            console.log(findUser[0].email);
            for(let i = 0; i < findUser.length; i++) {
                if(findUser[i].email === curEmail){
                    setUser(findUser[i].userName)
                    setTwitch(findUser[i].twitch)
                    setYoutube(findUser[i].youtube)
                    setGame(findUser[i].gameCur)
                };
            };
        });
    };

    return(
        <div className="User_wrapper">
            <div className="User_">
                <h2 className="User_Name">{user}</h2>
            </div>
            <div className="User_handles">
                <h2 className="Twitch_">Streaming on Twitch;</h2>
                <h3 className="Twitch">{twitch}</h3>
                <h2 className="Youtube_">Highlights on Youtube;</h2>
                <h3 className="Youtube">{youtube}</h3>
                <h2 className="Game_">Currently looking for team on;</h2>
                <h3 className="Game">{game}</h3>
            </div>
        </div>
    );
    
};

export default Player