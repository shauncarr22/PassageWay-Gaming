import React, {Component} from 'react';
import {Link} from 'react-router-dom';


const NavBar = () => {
    return(
        <div className="topnav">
            <a className="active"><Link to = "/">Home</Link></a>
            <a className="link__nav"><Link to = "/post">Post</Link></a>
        </div>
    );
}

export default NavBar