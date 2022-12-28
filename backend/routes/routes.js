var PacklistCon = require("../controllers/packlistcon");

module.exports = (app) => {
  app.post("/api/generatebaggagelist", PacklistCon.generatebaggagelist);
};
