const Products = require('../models/products');
const ObjectID = require('mongodb').ObjectID;

module.exports.all = function(req, res) {
  Products.all(function(err, docs) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(docs);
  });
};

module.exports.findById = function(req, res) {
  Products.findById(req.params.id, function(err, doc) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(doc);
  });
};

module.exports.create = function(req, res) {
  const product = {
    name: req.body.name,
    price: req.body.price,
    currency: req.body.currency,
    created: Date.now(),
    modified: Date(),
    categories: [req.body.categories],
  };
  Products.create(product, function(err, result) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(product);
  });
};

module.exports.update = function(req, res) {
  const updateOdject = req.body.price;
  Products.update(req.params.id, { $set: updateOdject }, function(err, result) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.sendStatus(200);
  });
};

module.exports.delete = function(req, res) {
  Products.delete(req.params.id, function(err, result) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.sendStatus(200);
  });
};
