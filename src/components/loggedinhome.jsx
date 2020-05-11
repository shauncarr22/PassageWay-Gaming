import React, {useContext, useState, useEffect} from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';
import { Redirect, useHistory } from 'react-router-dom';
import firebase from '../firebase';
import { AuthContext } from '../AuthContext.jsx'

const LoggedHomePage = () => {
    
    const [posts, setPosts] = useState('');
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');

    let reRoute = useHistory();
    const context = useContext(AuthContext);
    const { isAuth, uid } = context;

    

    if(!isAuth) reRoute.push('/')

    useEffect(() => {
       const currentUser = firebase.auth.currentUser.email
        getUser(currentUser)
        getPost()
    },[user])

    const getUser = (userEmail) => {
        console.log(userEmail);
        setEmail('laskey@gmail.com')
        let URL = `https://passageway-gaming.herokuapp.com/getUser/`
        Axios.get(URL)
        .then((data) => {
            let findUser = data.data
            console.log(findUser[0].email);
            for(let i = 0; i < findUser.length; i++) {
                if(findUser[i].email === userEmail){
                    setUser(findUser[i].userName)
                    return;
                };
            };
        });
        return;
    };

    const getPost = () => {
        Axios.get('https://passageway-gaming.herokuapp.com/getPost/')
        .then((data) => {
            setPosts(data.data)
        });
        return;
    }
 
        
    return(
        <div className="Container">
            <div className="LOG_HomePage_ProfileBox">
                <p className="LOG_User_cur">Logged in as {user}</p>
            </div>
            <button className="LOG_MakePost"><Link to = '/post'>Make New Post</Link></button>
            {Object.entries(posts).map(([key,val], i) => {
                return (
                    <div className="LOG_Home_PostBox" key={key}>
                        <p className="LOG_Post_Username">{val.postAuthor}</p>
                        <br/>
                        <p className="LOG_Post">{val.post[0]}</p>
                    </div>
                );
            })};
        </div>
    );
    
};

export default LoggedHomePage