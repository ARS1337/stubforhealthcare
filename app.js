const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(bodyParser());
app.use(cors());
const Sample = require("./sample");

app.get("/", (req, res) => {
  res.send("/ get request ");
});

app.post("/customerapi/login_api", (req, res) => {
  console.log(req.body);
  if (req.body.email == "mypcot@gmail.in" && req.body.password == "12345678" && req.body.country_id == "1") {
    res.json(Sample.loginSuccess);
  } else {
    res.json(Sample.loginFailed);
  }
});

app.post("/customerapi/banner/listing", (req, res) => {
  if (req.body.country_id != 1) {
    res.json(Sample.bannerFail);
  } else {
    res.json(Sample.bannerSuccess);
  }
});

app.post("/customerapi/forgot_password_api", (req, res) => {
  console.log(req.body);
  if (req.body.country_id != 1) {
    res.json(Sample.forgotPasswordFail);
  } else {
    res.json(Sample.forgotPasswordSuccess);
  }
});

app.post("/customerapi/my_profile/change_password_api", (req, res) => {
  console.log(req.body);
  let current_password = Sample.users.user.password
  if (req.body.current_password != current_password && req.body.new_password!==confirm_password ) {
    res.json(Sample.forgotPasswordFail);
  } else {
    res.json(Sample.forgotPasswordSuccess);
  }
});

app.listen(process.env.PORT, () => {
  console.log("sdfsdsdsdfsd and port is ", process.env.PORT);
});
