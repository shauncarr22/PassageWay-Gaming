const router = require('express').Router()

const password = require('../../mongoConfig');
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');

const postNew = require('../../db/seeds/post');

router.post('/', cors(), (req,res) => {
    MongoClient.connect(`mongodb+srv://ElinkTeam:${password}@home-post-fub39.mongodb.net/test?retryWrites=true&w=majority`, (err,client) => {
        if(err) console.error(err);
        const {postAuthor, post} = req.body;
        const db = client.db('test');
        const newPost = new postNew ({
            postAuthor,
            post,
        });
        db.collection('posts').insertOne(newPost,(err) => {
            if(err) console.error(err);
            res.send('Post Created')
        });
    });
});