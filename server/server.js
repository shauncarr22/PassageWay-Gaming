const express = require('express');
const cors = require('cors');
const BodyParser = require('body-parser');

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

const { profile, createPro, post, createPos } = require('./routes/')
app.use("/api/profile",profile);
app.use("/api/createPro", createPro);
app.use("/api/post", post);
app.use("/api/createPos", createPos);

app.listen(port, () => console.log(`listening from port: ${port}`));