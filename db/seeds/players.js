const mongoose = require('mongoose');


const profileSchema = new mongoose.Schema({
    profilePicture: [{data: Buffer, contentType: String}],
    userName: String,
    email: String,
    dateJoined: {type: Date}
});

module.exports = mongoose.model("player", profileSchema)

// const profile = new player({
//     profilePicture: null,
//     userName: 'lask1ey',
//     email: 'laskey@gmail.com',
//     dateJoined: new Date
// });

// module.exports = profile