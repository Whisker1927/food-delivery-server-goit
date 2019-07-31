const products = require('../db/costs/all-costs.json');
const express = require('express');

const app = express();

app.get('/costs', (req, res) => {
  res.send(products);
});

app.get('/costs/:id', (req, res) => {
  let oneProduct = products.find(product => {
    return product.id === Number(req.params.id);
  });
  res.send(oneProduct);
});

app.get('/costs/categories', (req, res) => {
  let oneProduct = products.find(product => {
    return product.categories === req.query.categories;
  });
  res.send(oneProduct);
});

app.use(function(req, res, next) {
  let err = new Error('not found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', { message: err.message, error: err });
});

module.exports = app;
