require('dotenv').config()
const login = process.env.login

const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');

const app = express();

// middleware
app.use(express.static('public'));

// view engine
app.set('view engine', 'ejs');

// database connection
const dbURI = `mongodb+srv://${login}@cluster0.mjbt6xu.mongodb.net/node-auth`;
mongoose.connect(dbURI)
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// routes
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', (req, res) => res.render('smoothies'));
app.use(authRoutes)