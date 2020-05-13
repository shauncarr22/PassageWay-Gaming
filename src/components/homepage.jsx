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
        // Axios.get('https://passageway-gaming.herokuapp.com/api/post')
        // .then((data) => {
        //     let outOrder = data.data
        //     let ordered = outOrder.reverse()
        //     this.setState({posts: ordered})
        //     console.log('home')
        // });
    };

    render(){
        
        return(
            <div className="Container">
                <div>
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
                <div className="HomePage_NewPost">
                    <button className="MakePost"><Link to = '/login'>Log In To Post</Link></button>
                </div>
            </div>
        );
    };
};

export default HomePage