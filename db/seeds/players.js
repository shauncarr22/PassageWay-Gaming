const mongoose = require('mongoose');


const profileSchema = new mongoose.Schema({
    profilePicture: [{data: Buffer, contentType: String}],
    userName: String,
    email: String,
    twitch: String,
    youtube: String,
    gameCur: String,
    dateJoined: {type: Date}
});
module.exports = mongoose.model("player", profileSchema)

// const profile = new player({
//     profilePicture: null,
//     userName: 'lask1ey',
//     email: 'laskey@gmail.com',
//     twitch: 'twitch.tv/lask1ey',
//     youtube: null,
//     gameCur: 'Valorant',
//     dateJoined: new Date
// });

// module.exports = profile