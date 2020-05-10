import React, {useContext, useState, useEffect} from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';
import firebase from '../firebase';
import { AuthContext } from '../AuthContext.jsx'

const HomePage = () => {
 
    const [post, setPost] = useState([]);
    const context = useContext(AuthContext);
    const { isAuth, loggedIn } = context;
    if(isAuth){
        let user = firebase.auth.currentUser.email
        console.log(user)
    };

    useEffect(() => {
        Axios.get('https://passageway-gaming.herokuapp.com/getPost/')
        .then((data) => {
            //this.setState({posts: data.data})
            setPost(data.data)
            console.log(post)
        });
    },[post])
          
    return(
        <div className="Container">
            <div className="HomePage_ProfileBox">
                <p className="User_cur">Logged in as </p>
            </div>
            {Object.entries(post).map(([key,val], i) => {
                return (
                    <div className="Home_PostBox">
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



export default HomePage