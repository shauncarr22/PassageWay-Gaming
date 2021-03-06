import React, { useState, useEffect, useContext} from 'react';
import { AuthContext } from '../AuthContext.jsx';
import { useHistory } from 'react-router-dom';
import firebase from '../firebase';
import Axios from 'axios';
import Logo from '../LogoNew.png'


const Signup = () => {

    let reRoute = useHistory();

    const context = useContext(AuthContext);
    const { isAuth, loggedIn, loggedOut } = context;

    if(isAuth) reRoute.push('/profile');

    const [username, setUserName] = useState("");
    const [twitch, setTwitch] = useState("");
    const [youtube, setYoutube] = useState("");
    const [game, setGame] = useState("")

    const [email, setUpEmail] = useState("");
    const [vaildEmail, setVaildEmail] = useState("");

    const [password, setUpPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [isStrong, setStrongPass] = useState(false);
    const [vaildateClass, setVaildClass] = useState("password-requirement-inactive")
    const [lower, setLower] = useState("invaild");
    const [upper, setUpper] = useState("invaild");
    const [number, setNumber] = useState("invaild");
    const [len, setLen] = useState('invaild');
    const [isSame, setIsSame] = useState("invaild");
    const [signUpComplete, setSignUpCom] = useState(false); 

    useEffect(() => {
        checkEmail(email);
        validatePassword(password,lower,upper,number,len);
        checkSame(password, rePassword);
        formComplete(vaildEmail,isStrong,isSame);
    }, [email, password, rePassword, isSame, isStrong, lower, upper, number,len, vaildEmail]);

    const checkEmail = (email) => {
        email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/g)
        ? setVaildEmail("valid")
        : setVaildEmail("invalid");
    };

    const validatePassword = (password, lower, upper, number, len) => {
        password.match(/[a-z]/g) ? setLower("valid") : setLower("invalid");
        password.match(/[A-Z]/g) ? setUpper("valid") : setUpper("invalid");
        password.match(/[0-9]/g) ? setNumber("valid") : setNumber("invalid");
        password.length >= 8 ? setLen("valid") : setLen("invalid");
        lower === "invalid" &&
        upper === "invalid" &&
        number === "invalid" &&
        len === "invalid"
        ? setStrongPass(false)
        : setStrongPass(true);
    };

    const checkSame = (password, rePassword) => {
        password === rePassword && (password !== "" || rePassword !== "")
        ? setIsSame("valid")
        : setIsSame("invalid");
    };
      const formComplete = (validEmail, isStrong, isSame) => {
        validEmail === "valid" && isStrong === true && isSame === "valid"
        ? setSignUpCom(true)
        : setSignUpCom(false);
    };

    const handleCreateUser = (userNameToSend, emailToSend, passswordToSend) => {
        localStorage.setItem("username", userNameToSend);
        const regStatus = new Promise((resolve, reject) => {
          firebase.signOut();
          loggedOut();
          resolve(firebase.register(userNameToSend, emailToSend, passswordToSend));
        });
        regStatus
          .then(() => {
            setTimeout(() => {
                // let user = firebase.auth.currentUser.uid;
                let URL =  `https://passageway-gaming.herokuapp.com/api/createPro`
                Axios.post(URL, {
                    userName: username,
                    email: email,
                    twitch: twitch,
                    youtube: youtube,
                    gameCur: game
                })
                .then((res) => {
                    console.log(res)
                })
                reRoute.push('/login')
                //loggedIn(user)
            }, 20);
          })
          .catch(error => {
            console.error(error.message);
          });
    };

    return(
        <div className="wrapper_Sign">
            <div className="Container_SignUp">
            
                <p className="UserName">Username</p>

                <input className="Username_input" 
                    type="text" 
                    name="username"
                    value={username}
                    onChange={event => setUserName(event.target.value)}
                ></input>

                <p className="Email">Email</p>

                <input className="Email_input" 
                    type="text" 
                    name="email"
                    value={email}
                    onChange={event => setUpEmail(event.target.value)}
                ></input>

                <p className="Password">Password</p>

                <input className="Password_input" 
                    type='text' 
                    name="password"
                    value={password}
                    onFocus={() => setVaildClass("password-requirment-active")}
                    onChange={event => setUpPassword(event.target.value)}
                ></input>

                <p className="RePassword">Retype Password</p>

                <input className="RePassword_input"
                    type="text"
                    value={rePassword}
                    onChange={event => setRePassword(event.target.value)}
                ></input>

          
                <p className="Twitch_Sign">Twitch</p>

                <input className="Twitch_input" 
                    type='text' 
                    name='twitch'
                    value={twitch}
                    onChange={event => setTwitch(event.target.value)}
                ></input>

                <p className="Youtube_Sign">Youtube</p>

                <input className="Youtube_input" 
                    type="text"
                    name="youtube"
                    value={youtube}
                    onChange={event => setYoutube(event.target.value)}
                ></input>

                <p className="Game_Sign">Game currently playing</p>

                <input className='Game_input' 
                    type='text'
                    name="game"
                    value={game}
                    onChange={event => setGame(event.target.value)}
                ></input>

                <p className="SignUp_Text">Sign Up UwU</p>

                <button className="Button_signUp"
                    onClick={() => handleCreateUser(username,email,password,twitch,youtube,game)}
                >Finish</button>

            </div>
            <div>
            <img className="logo_Sign" src={Logo} alt=""></img>
            </div>
        </div>
    );

};




export default Signup




