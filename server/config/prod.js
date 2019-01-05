// prod.js - production keys here!!
module.exports = {
  mongoURI: process.env.MONGO_URI,
  tokenSecret: process.env.COOKIE_KEY
};
