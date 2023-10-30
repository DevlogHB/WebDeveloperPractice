const express = require("express");
const app = express();
const path = require("path");
const redditData = require("./data.json");

// css, js..
app.use(express.static(path.join(__dirname, "/public")));

//set 설정
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
// 뷰를 렌더링
app.get("/", (req, res) => {
  res.render("home");
});

// 루프
app.get("/cats", (req, res) => {
  const cats = ["blue", "rocker", "monty", "stephanie", "winston"];
  res.render("cats", { cats });
});

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  const data = redditData[subreddit];
  if (data) {
    res.render("subreddit", { ...data });
  } else {
    res.render("notfound", { subreddit });
  }
});

// 조건
app.get("/rand", (req, res) => {
  const num = Math.floor(Math.random() * 10) + 1;
  res.render("random", { rand: num });
});

app.listen(8080, () => {
  console.log("PORT 8080");
});
