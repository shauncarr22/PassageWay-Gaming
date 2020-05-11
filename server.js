const express = require('express');
const cors = require('cors');
const BodyParser = require('body-parser');

const password = require('./mongoConfig');
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const player = require('./db/seeds/players')
const post = require('./db/seeds/post')

const app = express();

const port = process.env.PORT || 5000

app.use(express.static('dist'));
app.use(cors());
app.use(BodyParser.json());

app.get('/getPost', (req,res) => {
    MongoClient.connect(`mongodb+srv://ElinkTeam:${password}@home-post-fub39.mongodb.net/test?retryWrites=true&w=majority`, (err,client) => {
        if(err) console.error(err);
        const db = client.db('test');
        db.collection('posts').find().toArray((err,result) => {
            if(err) console.error(err);
            res.send(result)
        });
    });
});

app.post('/newpost',(req,res) => {
    MongoClient.connect(`mongodb+srv://ElinkTeam:${password}@home-post-fub39.mongodb.net/test?retryWrites=true&w=majority`, (err,client) => {
        if(err) console.error(err);
        const {username,post} = req.body;
        const db = client.db('test');
        const newPost = post ({
            username,
            post
        });
        db.collection('posts').insertOne(newPost,(err) => {
            if(err) console.error(err);
            res.send('Post Created')
        });
    });
});

app.post('/profileCreate', (req,res) => {
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

app.get(`/getUser/${email}`, (req,res) => {
    console.log(req.body)
    MongoClient.connect(`mongodb+srv://ElinkTeam:${password}@home-post-fub39.mongodb.net/test?retryWrites=true&w=majority`, (err,client) => {
        if(err) console.error(err);
        const db = client.db('test');
        db.collection('players').findOne({email: req.body.email}).toArray((err,results) => {
            if(err) console.error(err);
            res.send(results)
        });
    });
});

app.listen(port, () => console.log(`listening from port: ${port}`));