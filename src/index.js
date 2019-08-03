const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const db = require('./db/db');
const productsController = require('./controllers/products');

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/costs', productsController.all);

app.get('/costs/:id', productsController.findById);

app.post('/costs', productsController.create);

app.patch('/costs/:id', productsController.update);

app.delete('/costs/:id', productsController.delete);

db.connect(
  'mongodb://Vladyslav_Bezkrylyi:dynamo1927@mycluster-shard-00-00-fh2ln.gcp.mongodb.net:27017,mycluster-shard-00-01-fh2ln.gcp.mongodb.net:27017,mycluster-shard-00-02-fh2ln.gcp.mongodb.net:27017/test?ssl=true&replicaSet=MyCluster-shard-0&authSource=admin&retryWrites=true&w=majorityy',
  function(err) {
    if (err) {
      return console.log(err);
    }
    app.listen(PORT, () => {
      console.log('server is running on ' + PORT);
    });
  },
);
