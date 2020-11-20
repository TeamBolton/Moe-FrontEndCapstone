const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static(__dirname + '/../client/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost/test";
const dbName = "test";

//test request
app.get('/', (req, res) => {
  res.send('My Express React Webpack Babel Setup')
})

//retrieves review collections
app.get('/api/products/review', (req, res) => {
  MongoClient.connect(url, function (err, client) {
    const db = client.db(dbName);
    const reviewCollection = db.collection("Review");

    reviewCollection.find({}).toArray()
      .then((result) => {
        res.send(result)
      })
      .catch((err) => {
        console.log(err)
      })
    client.close()
  })
});

//post to server
app.post('/api/products/review', (req, res) => {
  res.send('Received successful POST request from Express Server!')
})

module.exports = app;