const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    postAuthor: String,
    post: [String],
    datePosted: {type: Date}
});

module.exports = mongoose.model('post', postSchema);

// const newPost = new post({
//     postAuthor: 'lask1ey',
//     post: ["Black Clover is a dumpster fire of an anime. Too bad I cant look away"],
//     datePosted: new Date
// })

// module.exports = newPost