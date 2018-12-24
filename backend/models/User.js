const Schema = require("mongoose").Schema
const passportLocalMongoose = require("passport-local-mongoose")


const userSchema = new Schema ({
  name: String,
  email: String,
},{
  timestamps: {
    createdAt: "created-at",
    updatedAt: "updated-at"
  },
  versionKey: false
})

userSchema.plugin(passportLocalMongoose,{usernameField: "email"})
module.exports = require("mongoose").model("User", userSchema)