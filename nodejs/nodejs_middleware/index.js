const express = require("express");
const app = express();
const morgan = require("morgan");

//로그 미들웨어
app.use(morgan("tiny"));

app.use((req, res, next) => {
  //   req.method = "GET";
  req.requestTime = Date.now();
  console.log(req.method.toUpperCase(), req.path);
  next();
});

app.use("/dogs", (req, res, next) => {
  console.log("i love dogs");
  next();
});

const verifyPassword = (req, res, next) => {
  const { password } = req.query;
  console.log(password);
  if (password === "pwd") {
    return next();
  }
  res.send("sorry you need a password");
};

// app.use("/", (req, res, next) => {
//   console.log("this is 1 middleware");
//   next();
// });

// app.use("/", (req, res, next) => {
//   console.log("this is 2 middleware");
//   next();
// });

app.get("/", (req, res) => {
  console.log(`req data: ${req.requestTime}`);
  res.send("home pasge!");
});

app.get("/dogs", (req, res) => {
  console.log(`req data: ${req.requestTime}`);
  res.send("wood wolf");
});

app.get("/secret", verifyPassword, (req, res) => {
  res.send("My Secret is: Somtimes i wear");
});

app.use((req, res) => {
  res.status(404).send("Not Found!");
});

app.listen(8080, () => {
  console.log("sever 8080");
});
