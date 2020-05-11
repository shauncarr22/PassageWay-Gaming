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
app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
})

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

app.post('/newPost', cors(), (req,res) => {
    MongoClient.connect(`mongodb+srv://ElinkTeam:${password}@home-post-fub39.mongodb.net/test?retryWrites=true&w=majority`, (err,client) => {
        if(err) console.error(err);
        const {post,userName} = req.body;
        const db = client.db('test');
        const newPost = new post ({
            userName,
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

app.get(`/getUser`, (req,res) => {
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

app.listen(port, () => console.log(`listening from port: ${port}`));