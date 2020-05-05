const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/passgaming', {useNewUrlParser: true});

const profile = require('./seeds/players')
const post = require('./seeds/post')


// profile.save((err,profile) => {
//     if(err) console.error(err);
//     console.log('profile saved')
// });

// post.save((err,post) => {
//     if(err) console.error(err);
//     console.log('post saved');
// });


