const router = require('express').Router()
const { session } = require('passport')
const passport = require("passport")
const passportSetup = require("../config/passport-setup")

//auth with google
router.get('/google', passport.authenticate("google", {
    scope: ["profile", "email"]
}))

router.get('/google/redirect', passport.authenticate("google"), (req, res) => {
    req.session.save(
        () => res.redirect("http://localhost:3000")
    )
})

router.get("/logout", (req, res) => {
    req.logout()
    res.redirect("/auth/profile")
})

router.get("/profile", (req, res) => {
    const user = req.session?.passport?.user
    // console.log(req?.user?.id)
     if(!user?.id){
        res.status(401).send("You dont have access")
     }
     else
        res.send(user)
    // console.log(req.cookies.sid)
})

module.exports = router
