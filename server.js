const express =require('express');
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://pratiksha:rBBM2fscP3UQnk4H@cluster0-8sqx5.mongodb.net/admin?retryWrites=true&w=majority";
const client = new MongoClient(uri,{ useUnifiedTopology: true }, { useNewUrlParser: true });
const app = express();
const port = 8100;
const cors=require('cors');
client.connect(err => {
const col = client.db("Quiz");
console.log("connect");
if (err)
return console.log(err);
app.use(cors());
require('./route')(app, col);
app.listen(port, () => {
console.log("Port 8100 running on browser...");
});
client.close()});