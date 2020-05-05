import React, {Component} from 'react';

class HomePage extends Component {
    constructor(props){
        super(props)
        this.state = {

        };
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
                    <button className="MakePost">Make New Post</button>
                </div>
            </div>
        );
    };
};

export default HomePage