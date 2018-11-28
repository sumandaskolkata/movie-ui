import path from 'path';
import express from 'express';
import axios from 'axios';
import passport from 'passport';
import {OAuthStrategy} from 'passport-google-oauth';

passport.use(new OAuthStrategy({
    consumerKey: GOOGLE_CONSUMER_KEY,
    consumerSecret: GOOGLE_CONSUMER_SECRET,
    callbackURL: "http://www.example.com/auth/google/callback"
  },
  function(token, tokenSecret, profile, done) {
      User.findOrCreate({ googleId: profile.id }, function (err, user) {
        return done(err, user);
      });
  }
));
const app = express();

const publicPath = express.static(path.join(__dirname,'../'));
const indexPath = path.join(__dirname,'../index.html');

app.use(publicPath);

app.get('/', (req, res) => {
    res.sendFile(indexPath);
});

app.get('/getMovieList',(req,res) => {
    console.log("edrftgyhj")
    axios.get('http://localhost:8080/getMovieList').then((response) => {
        res.send(response.data);
    }).catch((err)=>{
        console.log("edrftgyhj")
        res.end();
    })
});

export default app;