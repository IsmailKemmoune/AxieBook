const router = require('express').Router


//auth with google
router.get('/google', (req, res) => {
  res.send('google auth')
})

module.exports = router