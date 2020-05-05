import React, {Component} from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';

class HomePage extends Component {
    constructor(props){
        super(props)
        this.state = {
            
        };
    };


    componentDidMount(){
        console.log('cool')
    };

    render(){
        return(
            <div className="Container">
                <div className="HomePage_ProfileBox">
                    <p className="User_cur">Logged in as Lask1ey</p>
                </div>
                <div className="Home_PostBox">
                    <p className="Post_Username">Lask1ey</p>
                    <br/>
                    <p className="Post">Random test asdknal s dasd s asd sadas das s s das sd sad asd as s as sd sd as as s 
                     d s da s sa s d s  a aaaaaaaaaaaaaaaaaaaaaaaaaaa a  a a a a a a a a a a a aa a a a a a a
                    </p>
                </div>
                <div className="HomePage_NewPost">
                    <button className="MakePost"><Link to = '/post'>Make New Post</Link></button>
                </div>
            </div>
        );
    };
};

export default HomePage