module.exports = app => {
  const auth = require("../controllers/auth.controller");
  app.post("/api/auth/signin", auth.signin);
};
