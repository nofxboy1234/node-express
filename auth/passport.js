import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import db from "../db/node_auth_basics/queries.js";

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await db.findAuthUserByUsername(username);

      if (!user) {
        return done(null, false, { message: "Incorrect username" });
      }
      if (user.password !== password) {
        return done(null, false, { message: "Incorrect password" });
      }
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await db.findAuthUserById(id);

    done(null, user);
  } catch (err) {
    done(err);
  }
});

export default passport;
