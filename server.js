// CONFIG
const express = require('express');
const app = express();

app.use(express.static (__dirname + '/static'));
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', __dirname +'/views');

// ROUTES
require('./routes')(app);

// SERVER LISTEN
app.listen(8000, ()=> console.log('listening on port 8000'));