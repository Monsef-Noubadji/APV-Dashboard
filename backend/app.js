const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const connectDB = require('./connection/dbConnection');
const userRoutes = require('./routes/userRoutes')
const cors = require('cors');
// middlewares
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.disable('X-Powered-By');
app.use(cors());


//routes
app.use('/users', userRoutes);

// DB connection
connectDB();

//Server init
app.listen(process.env.PORT, () => {
    console.log('App listening ✅ on ' + process.env.ADDRESS + process.env.PORT || 5000)
})

// to Debug node app in Chrome , use : node --inspect <YOU_ENTRY_FILE>

module.exports = app;