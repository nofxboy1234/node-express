import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import db from "../db/node_auth_basics/queries.js";
import bcrypt from "bcryptjs";

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await db.findAuthUserByUsername(username);

      if (!user) {
        return done(null, false, { message: "Incorrect username" });
      }
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
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
