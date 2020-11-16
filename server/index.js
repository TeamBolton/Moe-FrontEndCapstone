const express = require('express');
const app = express();
const port = 3000;
const db = require('../database/index.js');

//NEED TO IMPLEMENT 'ID' INTO API ENDPOINT AT SOME POINT!
app.get('/api/products/review', (req, res) => {
  res.send('Received successful GET request from Express Server!')

});


//NEED TO IMPLEMENT 'ID' INTO API ENDPOINT AT SOME POINT!
app.post('/api/products/review', (req, res) => {
  res.send('Received successful POST request from Express Server!')

})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})

