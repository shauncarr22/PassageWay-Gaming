import React, {Component} from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';

class HomePage extends Component {
    constructor(props){
        super(props)
        this.state = {
           posts: []
        };
    };


    componentDidMount(){
        Axios.get('http://localhost:3000/getPost')
        .then((data) => {
            this.setState({posts: data.data})
            console.log(this.state.posts)
        });
    };

    render(){
        return(
            <div className="Container">
                <div className="HomePage_ProfileBox">
                    <p className="User_cur">Logged in as </p>
                </div>
                {Object.entries(this.state.posts).map(([key,val], i) => {
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
};

export default HomePage