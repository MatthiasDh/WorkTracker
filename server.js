const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
const upload = require('express-fileupload');


//Connect to database
mongoose.connect(config.database);

//On connection
mongoose.connection.on('connected', () => {
  console.log('Connected to database '+config.database);
});

//On error
mongoose.connection.on('error', (err) => {
  console.log('Database error: '+err);
});

const app = express();
const server = require('http').Server(app);
const users = require('./controllers/users.controller');
const customers = require('./controllers/customers.controller');

//Enable for development
//const port = 4000;

//Enable for deployment
const port = process.env.PORT || 8080;

//CORS Middleware
app.use(cors());

//Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

//Body Parser Middleware
app.use(bodyParser.json());

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);
app.use('/customers', customers);

//Index Route
app.get('/', (req, res) => {
  res.send('Invalid Endpoint');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

//Start Server
server.listen(port, () => {
    console.log(__dirname);
    console.log('Server started on port '+port);
  });