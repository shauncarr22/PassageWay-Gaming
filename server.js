const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const app = express();


const port = 3000;

app.use(express.static('dist'));

app.get('/getPost', (req,res) => {
    MongoClient.connect(`mongodb://127.0.0.1:27017/passgaming`, (err,client) => {
        if(err) console.error(err);
        const db = client.db('passgaming');
        db.collection('posts').find().toArray((err,result) => {
            if(err) console.error(err);
            res.send(result)
        });
    });
});

app.listen(port, () => console.log(`listening from port: ${port}`));