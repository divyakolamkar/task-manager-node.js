const express = require('express');
// const cors = require('cors');
// const mongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(cors());

const databaseName = 'task-manager-api';
const connectionUrl = 'mongodb://127.0.0.1:27017/' + databaseName;

app.use('/api/saveTasks', require('./api/routes/saveTasks'));
app.use('/api/getTasks', require('./api/routes/getTasks'));

//Page Not Found - *
app.use('*', require('./api/routes/notFound'));

const hostname = 'localhost';
const port = 3000;
const server = app.listen(port, hostname, () => {

  // mongoClient.connect(connectionUrl, { useUnifiedTopology: true, useNewUrlParser: true }, (err, client) => {
  //   if (err) {
  //     console.log(err);
  //   }

    mongoose.connect(connectionUrl, {
      useNewUrlParser: true,
      useCreateIndex: true
    }, (err, client) => {

    console.log(`Server running at http://${hostname}:${port}/`);
  });

});



