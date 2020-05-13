const router = require("express").Router()

const password = require('../../mongoConfig');
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');

const player = require('../../db/seeds/players')

router.post('/', (req,res) => {
    console.log(req.body)
    MongoClient.connect(`mongodb+srv://ElinkTeam:${password}@home-post-fub39.mongodb.net/test?retryWrites=true&w=majority`, (err,client) => {
        if(err) console.error(err);
        const {userName, email,twitch,youtube,gameCur} = req.body;
        const db = client.db('test');
        const profile = new player ({
            userName,
            email,
            twitch,
            youtube,
            gameCur
        })
        db.collection('players').insertOne(profile, (err) => {
            if(err) console.error(err);
            res.send('user created')
        })
        //profile.save();
        // res.send('User created')
    });
});

module.exports = router