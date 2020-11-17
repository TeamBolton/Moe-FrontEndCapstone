const express = require('express');
const app = express();
const port = 3000;
const assert = require("assert");

// const db = require('../database/index.js');
const MongoClient = require('mongodb').MongoClient;

//mongo connection url
var url = "mongodb://localhost/test";

//db name
const dbName = "test";

app.get('/', (req, res) => {
  res.send('Test')
})

app.get('/api/products/review', (req, res) => {
  console.log('Received successful GET request from Express Server!')

  MongoClient.connect(url, function (err, client) {
    const db = client.db(dbName);
    console.log("Connected successfully to Mongo via GET request to /api/products/review!")

    const reviewCollection = db.collection("Review");

    reviewCollection.find({}).toArray()
      .then((result) => {
        res.send(result)
      })
      .catch((err) => {
        console.log(err)
      })
    client.close()
    console.log("Successfully executed GET request to /api/products/review!")
  })
});



app.post('/api/products/review', (req, res) => {
  res.send('Received successful POST request from Express Server!')
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})

