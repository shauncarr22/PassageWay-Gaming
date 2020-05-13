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

    const [post, setPost] = useState('')

    let reRoute = useHistory();
    const context = useContext(AuthContext);
    const { isAuth, uid } = context;
    
    if(!isAuth) reRoute.push('/');

    useEffect(() => {
        const currUser = firebase.auth.currentUser.email
        let URL = `https://passageway-gaming.herokuapp.com/api/profile`
        Axios.get(URL)
        .then((data) => {
            let findUser = data.data
            for(let i = 0; i < findUser.length; i++) {
                if(findUser[i].email === currUser){
                    setUser(findUser[i].userName)
                    setTwitch(findUser[i].twitch)
                    setYoutube(findUser[i].youtube)
                    setGame(findUser[i].gameCur)
                };
            };
        });
    },[uid]);

 
    // if(!user){
    //     console.log('user not found')
    // } else {
    //     Axios.get('https://passageway-gaming.herokuapp.com/api/post')
    //     .then((data) => {
    //         let userPost = []
    //         let list = data.data
    //         for(let i = 0; i < list.length; i++){
    //             if(list[i].postAuthor === user){
    //                 userPost.push(list[i])
    //             };
    //         };
    //         let outOrder = userPost
    //         let ordered = outOrder.reverse()
    //         setPost(ordered)
    //         return;
    //     });
        
    //     console.log('Player Post')
    // };


    return(
        <div className="User_wrapper">
            <div className="User_">
                <h2 className="User_Name">{user}</h2>
                <h2 className="Twitch_">Streaming on Twitch;</h2>
                <h3 className="Twitch">{twitch}</h3>
                <h2 className="Youtube_">Highlights on Youtube;</h2>
                <h3 className="Youtube">{youtube}</h3>
                <h2 className="Game_">Currently looking for team on;</h2>
                <h3 className="Game">{game}</h3>
            </div>
            <div className="User_Handles">
                {Object.entries(post).map(([key,val], i) => {
                    return (
                        <div className="Home_PostBox" key={key}>
                            <p className="Post_Username">{val.postAuthor}</p>
                            <br/>
                            <p className="Post">{val.post[0]}</p>
                        </div>
                    );
                })};
            </div>
        </div>
    );
    
};

export default Player