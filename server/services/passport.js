const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const LocalStrategy = require("passport-local");
const User = require("../models/user");
const config = require("../config");

//Create Local Strategy
const localLogin = new LocalStrategy({ usernameField: "email" }, function(
  email,
  password,
  done
) {
  // verify this username and password, call done with the user if correct
  // otherwise call done with false
});

// setup options for jwt strategy
jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader("authorization"),
  secretOrKey: config.secret
};

// create jwt strategy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
  // see if the user id in the payload exists in db
  // if it does, call done with that user
  // otherwise call done without user object
  User.findById(payload.sub, function(err, user) {
    if (err) {
      return done(err, false);
    }

    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  });
});

// tell passport to use this strategy
passport.use(jwtLogin);
