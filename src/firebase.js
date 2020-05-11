const app = require('firebase');

const config = require('./components/firebaseConfig');

class firebase {
    constructor(){
        app.initializeApp(config.default);
        this.auth = app.auth();
    };

    login(email,password){
        return this.auth.signInWithEmailAndPassword(email,password)
    };

    signOut(){
        return this.auth.signOut()
    };

    register(name,email,password){
        const reg = new Promise ((resolve, reject) => {
            resolve(this.auth.createUserWithEmailAndPassword(email,password))
        });
        reg.catch(err => {
            console.error(err);
        });
    };

    statusChange(){
        this.auth.onAuthStateChanged((user) => {
            if(user) return user;
            console.error('register error');
        });
    };

};

export default new firebase;