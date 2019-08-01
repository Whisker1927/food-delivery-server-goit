const express = require('express');
const corsMiddleware = require('cors');
const routes = require('./costs/routes');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(corsMiddleware());

app.use(routes);

app.listen(PORT, () => {
  console.log('server is running on ' + PORT);
});
