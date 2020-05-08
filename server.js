const express = require('express');
const password = require('./mongoConfig');
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const player = require('./db/seeds/players.js')
const cors = require('cors');
const BodyParser = require('body-parser');

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

app.post('/profileCreate', (req,res) => {
    MongoClient.connect(`mongodb+srv://ElinkTeam:${password}@home-post-fub39.mongodb.net/test?retryWrites=true&w=majority`, (err,client) => {
        if(err) console.error(err);
        const {username, email,twitch,youtube,gameCur} = req.body
        const profile = new player ({
            username,
            email,
            twitch,
            youtube,
            gameCur
        })
        profile.save();
        res.send('User created')
    });
});

app.listen(port, () => console.log(`listening from port: ${port}`));