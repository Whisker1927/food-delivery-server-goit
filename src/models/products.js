const ObjectID = require('mongodb').ObjectID;
const db = require('../db/db');

module.exports.all = function(cb) {
  db.get()
    .collection('products')
    .find()
    .toArray(function(err, docs) {
      cb(err, docs);
    });
};

module.exports.findById = function(id, cb) {
  db.get()
    .collection('products')
    .findOne({ _id: ObjectID(id) }, function(err, doc) {
      cb(err, doc);
    });
};

module.exports.create = function(product, cb) {
  db.get()
    .collection('products')
    .insert(product, function(err, result) {
      cb(err, result);
    });
};

module.exports.update = function(id, newData, cb) {
  db.get()
    .collection('products')
    .updateOne({ _id: ObjectID(id) }, newData, function(err, result) {
      cb(err, result);
    });
};

module.exports.delete = function(id, cb) {
  db.get()
    .collection('products')
    .deleteOne({ _id: ObjectID(id) }, function(err, result) {
      cb(err, result);
    });
};
