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
  const user = this;

  bcrpyt.genSalt(10, function(err, salt) {
    if (err) {
      return next(err);
    }

    bcrpyt.hash(user.password, salt, null, function(err, hash) {
      if (err) {
        return next(err);
      }

      user.password = hash;
      next();
    });
  });
});

//Create the model class
const ModelClass = mongoose.model("user", userSchema);

//Export the model
module.exports = ModelClass;
