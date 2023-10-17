const jwt = require('jsonwebtoken');
require('dotenv').config()
const secret = process.env.secret

const requireAuth = (req, res, next) => {
const token = req.cookies.jwt;

// check json web token exists & is verified
if (token) {
    jwt.verify(token, secret, (err, decodedToken) => {
        if(err) {
            console.log(err.message);
            res.redirect('/login');
        }
        else {
            console.log(decodedToken);
            next();
        }
    })
} 
else {
    res.redirect('/login');
}
}
module.exports = { requireAuth };