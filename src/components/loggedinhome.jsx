import React, {useContext, useState, useEffect} from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';
import { Redirect, useHistory } from 'react-router-dom';
import firebase from '../firebase';
import { AuthContext } from '../AuthContext.jsx'

const LoggedHomePage = () => {
    
    const [post, setPost] = useState('');
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');

    let reRoute = useHistory();
    const context = useContext(AuthContext);
    const { isAuth, loggedIn } = context;

    if(isAuth){
        getPost();
        getUser();
    } else {
        reRoute.push('/login')
    };


    const getUser =() =>{
        let currentUser = firebase.auth.currentUser.email
        console.log(currentUser)
    };

    const getPost =() => {
        Axios.get('https://passageway-gaming.herokuapp.com/getPost/')
        .then((data) => {
            this.setState({posts: data.data})
        });
    };

    
        
    return(
        <div className="Container">
            <div className="HomePage_ProfileBox">
                <p className="User_cur">Logged in as {this.state.user}</p>
            </div>
            {Object.entries(this.state.posts).map(([key,val], i) => {
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