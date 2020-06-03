// require dependencies
require('newrelic');
const express = require('express');
const path = require('path');
const expressStaticGzip = require('express-static-gzip');

const ctr = require('./sdc-routes/mainController.js');

// declare constant
const PORT = 5000;
const app = express();

// define express middleware
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(expressStaticGzip(path.join(__dirname, '../public'), {
  enableBrotli: true,
  orderPreference: ['br', 'gz']
}));

// API's routes
app.get('/looks/:id', (req, res) => {
  console.log('server => (id): ', req.body.id, req.body)
  ctr.completeTheLook(1, (err, data) => {
    if(err) {
      res.status(400).send(err);
    }
    // console.log('res => ', data.length, data)
    res.status(200).send(data)
  })
})

app.get('/relatedProduct/:id', async (req, res) => {
  console.log('server => (id): ', req.body.id, req.body)
  await ctr.relatedProduct(1, (err, data) => {
    if(err) {
      res.status(400).send(err);
    }
    // console.log('res => ', data.length, data)
    res.status(200).send(data)
  })
})

// Add listener on application
app.listen(PORT, () => {
  console.log(`Server is listening on port: http://localhost:${PORT}`)
});














