import React, {useContext, useState, useEffect} from 'react';
import Axios from 'axios';
import { Redirect, useHistory } from 'react-router-dom';
import firebase from '../firebase';
import { AuthContext } from '../AuthContext.jsx'

const Post = () => {
  
    const [post, setPost] = useState([]);
    const [email, setEmail] = useState('');
    const [user, setUser] = useState('');

    let reRoute = useHistory();
    const context = useContext(AuthContext);
    const { isAuth, uid } = context;

    if(!isAuth) reRoute.push('/')

    useEffect(() => {
        const currentUser = firebase.auth.currentUser.email
        checkUser(currentUser)
    }, [uid])

    const checkUser = (userEmail) => {
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
        console.log(user)
        return;
    };

    const sumbitPost = (e,post,user) => {
        e.preventDefault()
        let URL = 'https://passageway-gaming.herokuapp.com/newPost/'
        Axios.post(URL, {
            post: post,
            userName: user
        })
        .then((res) => {
            console.log(res)
        })
        return;
    };
    
    return(
        <div className="Input_Box">
            <form>
                <textarea className="Input" rows='10' cols='75' onChange={e => setPost(e.target.value)}></textarea>
                <br/>
                <button className="Sumbit_Post" onClick={e => sumbitPost(e,post,user)}>Post It</button>
            </form>
        </div>
    );
    
};

export default Post 