const router = require("express").Router()

const password = require('../../mongoConfig');
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');


router.get(`/`, (req,res) => {
    console.log(req.body)
    MongoClient.connect(`mongodb+srv://ElinkTeam:${password}@home-post-fub39.mongodb.net/test?retryWrites=true&w=majority`, (err,client) => {
        if(err) console.error(err);
        const db = client.db('test');
        db.collection('players').find().toArray((err,results) => {
            if(err) console.error(err);
            res.send(results)
        });
    });
});

module.exports = router