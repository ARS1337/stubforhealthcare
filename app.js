const express = require("express");
const cors = require("cors");
const app = express();
const formidable = require("express-formidable");
app.use(formidable());
app.use(cors());
const Sample = require("./sample");

app.get("/", (req, res) => {
  res.send("<p> pee pee poo poo </p>");
});

app.post("/customerapi/login_api", (req, res) => {
  console.log(req.fields);
  let current_password = Sample.users[0].password;
  if (
    req.fields.email == "mypcot@gmail.in" &&
    req.fields.password == current_password &&
    req.fields.country_id == "1"
  ) {
    res.json(Sample.loginSuccess);
  } else {
    res.json(Sample.loginFailed);
  }
});

app.post("/customerapi/banner/listing", (req, res) => {
  if (req.fields.country_id != 1) {
    res.json(Sample.bannerFail);
  } else {
    res.json(Sample.bannerSuccess);
  }
});

app.post("/customerapi/forgot_password_api", (req, res) => {
  console.log(req.fields);
  if (req.fields.country_id != 1) {
    res.json(Sample.forgotPasswordFail);
  } else {
    res.json(Sample.forgotPasswordSuccess);
  }
});

app.post("/customerapi/my_profile/change_password_api", (req, res) => {
  let current_password = Sample.users[0].password;
  if (
    req.fields.current_password != current_password &&
    req.fields.new_password !== req.fields.confirm_password
  ) {
    res.json(Sample.forgotPasswordFail);
  } else {
    Sample.users[0].password = req.fields.confirm_password;
    res.json(Sample.forgotPasswordSuccess);
  }
});

app.post("/customerapi/roles/listing", (req, res) => {
  res.json(Sample.roles);
});

app.post("/customerapi/state/listing", (req, res) => {
  res.json(Sample.stateList);
});

app.post("/customerapi/country/listing", (req, res) => {
  res.json(Sample.countryList);
});

app.listen(process.env.PORT || 8080, () => {
  console.log("sdfsdsdsdfsd and port is ", process.env.PORT || 8080);
});
