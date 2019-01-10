const router = require("express").Router()
const User = require("../models/User.js")
const passport = require("passport")

router.post("/signup", (req,res,next) => {
  User.register(req.body, req.body.password)
      .then(user => res.status(201).json(user))
      .catch(err => res.status(500).json(err))
})

router.post("/login", (req,res,next) => {
  passport.authenticate("local", (err,user,info) => {
    if(err) return res.status(500).json(info)
    if(!user) return res.status(404).json(info)
    req.login(user, ()=> res.status(201).json(user))
  })(req,res,next)
})

router.get("/logout", (req,res,next) => {
  req.logout()
  return res.status(200).json({message: "Succesfully loged out"})
})

module.exports = router

