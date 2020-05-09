import React, { createContext, Component } from 'react';
import { setCookie, getCookie } from './components/cookies';

export const AuthContext = createContext(getCookie());

export default class AuthContextProvider extends Component {
    constructor(props){
        super(props)
        this.state = {
            isAuth: false,
            uid: null
        };
       
    };

    componentDidMount(){
        this.setState(setCookie());
    };

    loggedIn(uid){
        this.setState({isAuth: true, uid: uid});
        setCookie(this.setState);
    };

    loggedOut(){
        setCookie({isAuth: false, uid: ""});
    };

    render(){
        console.log(isAuth)
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
