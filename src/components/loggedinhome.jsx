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
        setEmail('laskey@gmail.com')
        let URL = `https://passageway-gaming.herokuapp.com/api/profile`
        Axios.get(URL)
        .then((data) => {
            let findUser = data.data
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
        Axios.get('https://passageway-gaming.herokuapp.com/api/post')
        .then((data) => {
            let outOrder = data.data
            let ordered = outOrder.reverse()
            setPosts(ordered)
        });
        return;
    }
 
        
    return(
        <div className="Container">
            <div>
                {Object.entries(posts).map(([key,val], i) => {
                    return (
                        <div className="Home_PostBox" key={key}>
                            <p className="Post_Username">{val.postAuthor}</p>
                            <br/>
                            <p className="Post">{val.post[0]}</p>
                        </div>
                    );
                })};
            </div>
            <div className="HomePage_NewPost">
                <p className="User_cur">Logged in as {user}</p>
                <button className="MakePost"><Link to = '/post'>Create New Post</Link></button>
            </div>
        </div>
    );
    
};

export default LoggedHomePage

{/* <div className="Container">
<div className="HomePage_ProfileBox">
    <p className="User_cur">Logged in as {user}</p>
</div>
<button className="MakePost"><Link to = '/post'>Make New Post</Link></button>
{Object.entries(posts).map(([key,val], i) => {
    return (
        <div className="Home_PostBox" key={key}>
            <p className="Post_Username">{val.postAuthor}</p>
            <br/>
            <p className="Post">{val.post[0]}</p>
        </div>
    );
})};
</div> */}