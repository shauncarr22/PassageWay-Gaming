const mongoose = require('mongoose');
const password = require('../mongoConfig.js');

const db = mongoose.connection;

mongoose.connect(`mongodb+srv://ElinkTeam:${password}@home-post-fub39.mongodb.net/test?retryWrites=true&w=majority`, {useNewUrlParser: true});

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("were connected");
});

const profile = require('./seeds/players')
const post = require('./seeds/post')


// profile.save((err,profile) => {
//     if(err) console.error(err);
//     console.log('profile saved')
// });

post.save((err,post) => {
    if(err) console.error(err);
    console.log('post saved');
});


