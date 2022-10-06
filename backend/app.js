const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const connectDB = require('./connection/dbConnection');
const userRoutes = require('./routes/userRoutes')
const cors = require('cors');
const path = require('path');
// middlewares
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.disable('X-Powered-By');
app.use(cors());

//routes
app.use('/', require(path.join(__dirname, 'routes', 'userRoutes.js'));

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config({path: __dirname+'/.env'});
  }
// static files (build of your frontend)
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend', 'build')));
    app.get('/*', (req, res) => {
      res.sendFile(path.join(__dirname, '../frontend', 'build', 'index.html'));
    })
  }

// DB connection
connectDB();

//Server init
app.listen(process.env.PORT, () => {
    console.log('App listening ✅ on ' + process.env.PORT || 4000)
})

// to Debug node app in Chrome , use : node --inspect <YOU_ENTRY_FILE>

module.exports = app;