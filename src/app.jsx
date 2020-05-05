import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import HomePage from './components/homepage.jsx'
import Player from './components/player.jsx'
import NavBar from './components/navbar.jsx'
import Login from './components/login.jsx'
import Signup from './components/signup.jsx'
import Post from './components/post.jsx'


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {};
    };
    render() {
        return (
            <BrowserRouter>
                <NavBar/>
                <Route exact path = "/" component={HomePage}/>
                <Route path = "/profile" component={Player}/>
                <Route path = '/login' component={Login}/>
                <Route path = '/register' component={Signup}/>
                <Route path = '/post' component={Post}/>
            </BrowserRouter>
        );
    };
};

export default App;