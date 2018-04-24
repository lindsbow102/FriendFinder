const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
var PORT = process.env.PORT;

app.use(express.static(path.join(__dirname, './app/public')));

// Add middleware for parsing incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// Add the application routes
require(path.join(__dirname, './routing/apiRoutes'))(app);
require(path.join(__dirname, './routing/htmlRoutes'))(app);

// Start listening on PORT
app.listen(PORT, function() {
    console.log('Friend Finder app is listening on PORT: ' + PORT);
  });