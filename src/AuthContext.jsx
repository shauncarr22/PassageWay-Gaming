import React, { createContext, Component } from 'react';
import { setCookie, getCookie } from './components/cookies';

export const AuthContext = createContext(getCookie());

export default class AuthContextProvider extends Component {
   
    state = {
        isAuth: false,
        uid: ""
    }
        
        


    componentDidMount(){
        this.setState(setCookie());
    };

    loggedIn = uid => {
        if(uid === undefined || uid === null){
            this.setState({isAuth: true, uid: "Anon"})
        } else {
            this.setState({isAuth: true, uid: uid});
        }
        setCookie(this.state);
    }

    loggedOut = () => {
        setCookie({isAuth: false, uid: ""});
    };

    render(){
        return(
            <AuthContext.Provider
                value = {{
                    ...this.state,
                    loggedIn: this.loggedIn,
                    loggedOut: this.loggedOut
                }}
            >
                {this.props.children}
            </AuthContext.Provider>
        );
    };

};
