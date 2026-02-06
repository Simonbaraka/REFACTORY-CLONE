let express = require("express");
let app = express();

let userdetails = (req, res, next) => {
  let userdetailsString = req.get("user-details");
  const userDetails = JSON.parse(userdetailsString); //converted to an object
  if (!userDetails) {
    res.status(403);
    res.json("There is no authorized information found");
  }
};

app.use(userdetails);



