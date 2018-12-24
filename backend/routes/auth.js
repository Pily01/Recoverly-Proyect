const router = require("express").Router()
const User = require("../models/User.js")

router.post("/signup", (req,res,next) => {
  User.register(req.body, req.body.password)
      .then(user => res.status(201).json(user))
      .catch(err => res.status(500).json(err))
})

module.exports = router

