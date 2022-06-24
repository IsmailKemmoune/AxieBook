const mongoose = require('mongoose');
const express = require('express')
const app = express()
const authRoutes = require("./routes/auth-routes")
const apiRoutes = require("./routes/api-routes")
const session = require('express-session')
const MemoryStore = require('memorystore')(session)
const cookieParser = require('cookie-parser')
const passport = require('passport')
const cors = require('cors');

var fs = require('fs');
var path = require('path');
require('dotenv/config');


app.use(express.json());
mongoose.connect(process.env.MONGO_URL);

//enable CORS for all my GET/POSR requests
app.use(cors());

//express cookie parser middleware
app.use(cookieParser())

//express session configuration middleware
app.use(session({
    name: "sid",
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: new MemoryStore({
        checkPeriod: 86400000 
      }),
    cookie: { maxAge: 86400000 },
  }))

//passport initialize middleware
app.use(passport.initialize());

//passport session middleware i can also use : app.use(passport.session())
//alter the req object and change the 'user' value that is currently 
//the session id (from the client cookie) into the true deserialized user object
app.use(passport.authenticate("session"));

//express routes middleware 
app.use("/auth", authRoutes);
app.use("/api", apiRoutes);


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})