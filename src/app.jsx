import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import HomePage from './components/homepage.jsx'
import Post from './components/post.jsx'
import NavBar from './components/navbar.jsx'


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
                <Route path = "/post" component={Post}/>
            </BrowserRouter>
        );
    };
};

export default App;