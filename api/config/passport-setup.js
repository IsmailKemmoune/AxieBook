const { application } = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const keys = require("./keys")

passport.use(new GoogleStrategy({
    //options for google trategy
    callbackURL: "/auth/google/redirect",
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret
}, (accessToken, refreshToken, profile, done) => {
 //passport callback function

 done(false, profile)
}))


passport.serializeUser((user, done) => {
    
    done(null, {name: user.displayName, id: user.id, emails: user.emails[0].value});
  });
   
passport.deserializeUser((user, done) => {
      done(null, user);
  });