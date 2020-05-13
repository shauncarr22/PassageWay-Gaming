const router = require('express').Router()

const password = require('../../mongoConfig');
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');

router.get('/', (req,res) => {
    MongoClient.connect(`mongodb+srv://ElinkTeam:${password}@home-post-fub39.mongodb.net/test?retryWrites=true&w=majority`, (err,client) => {
        if(err) console.error(err);
        const db = client.db('test');
        db.collection('posts').find().toArray((err,result) => {
            if(err) console.error(err);
            res.send(result)
        });
    });
});

module.exports = router