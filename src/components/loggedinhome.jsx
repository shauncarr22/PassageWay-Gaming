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
        Axios.post(URL, {
            email: userEmail
        })
        .then((data) => {
            console.log(data.data);
        })
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
            <div className="HomePage_ProfileBox">
                <p className="User_cur">Logged in as {user}</p>
            </div>
            {Object.entries(posts).map(([key,val], i) => {
                return (
                    <div className="Home_PostBox" key={key}>
                        <p className="Post_Username">{val.postAuthor}</p>
                        <br/>
                        <p className="Post">{val.post[0]}</p>
                    </div>
                )
            })}
            <div className="HomePage_NewPost">
                <button className="MakePost"><Link to = '/post'>Make New Post</Link></button>
            </div>
        </div>
    );
    
};

export default LoggedHomePage