import React, {Component} from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';

class HomePage extends Component {
    constructor(props){
        super(props)
        this.state = {
           posts: [],
        };
    };


    componentDidMount(){
        this.getPost()
    };


    getPost(){
        Axios.get('https://passageway-gaming.herokuapp.com/getPost/')
        .then((data) => {
            this.setState({posts: data.data})
        });
    }

    render(){
        
        return(
            <div className="Container">
                 <div className="HomePage_NewPost">
                    <button className="MakePost"><Link to = '/login'>Log In To Post</Link></button>
                </div>
                {Object.entries(this.state.posts).map(([key,val], i) => {
                    return (
                        <div className="Home_PostBox" key={key}>
                            <p className="Post_Username">{val.postAuthor}</p>
                            <br/>
                            <p className="Post">{val.post[0]}</p>
                        </div>
                    );
                })};
            </div>
        );
    };
};

export default HomePage