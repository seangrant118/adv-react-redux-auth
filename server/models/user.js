const mongoose = require("mongoose");
const bcrpyt = require("bcrypt-nodejs");
const Schema = mongoose.Schema;

//Define model
const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String
});

//On Save Hook, encrypt password
userSchema.pre("save", function(next) {
  // get access to user model
  const user = this;

  // generate a salt then run callback
  bcrpyt.genSalt(10, function(err, salt) {
    if (err) {
      return next(err);
    }

    // hash (encrypt) our password using salt
    bcrpyt.hash(user.password, salt, null, function(err, hash) {
      if (err) {
        return next(err);
      }

      //overwrite plain text password with encrypted password
      user.password = hash;
      next();
    });
  });
});

//Create the model class
const ModelClass = mongoose.model("user", userSchema);

//Export the model
module.exports = ModelClass;
