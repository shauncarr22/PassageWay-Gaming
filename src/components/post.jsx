import React, {Component} from 'react';
import Axios from 'axios';

class Post extends Component {
    constructor(props){
        super(props)
        this.state = {
            post: null
        };
    };

    handleChange(e){
        //console.log(e.target.value)
        this.setState({post: e.target.value})
    };

    handleClick(e){
        e.preventDefault()
        
    };

    render(){
        return(
            <div className="Input_Box">
                <form>
                    <textarea className="Input" rows='10' cols='75' onChange={this.handleChange.bind(this)}></textarea>
                    <br/>
                    <button className="Sumbit_Post" onClick={this.handleClick.bind(this)}>Post It</button>
                </form>
            </div>
        );
    };
};

export default Post 