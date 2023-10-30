const express = require("express");
const app = express();
// console.dir(app);

// 요청이라면 상관없이 작동
// app.use((req, res) => {
//   console.log("we got ad new req!");
//   //   res.send("hello world"); //http 응답
//   res.send("<h1>This is my webpage! </h1>");
// });

// /cats => 'meow'
// /dogs => 'woof'
// '/'
app.get("/", (req, res) => {
  res.send("This is my hom page");
});

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  console.log(req.params);
  res.send(`<h1>Browsing the ${subreddit} subreddit </h1>`);
});

app.post("/cats", (req, res) => {
  res.send("post/cats!!!");
});
app.get("/cats", (req, res) => {
  //   console.log("Cat Req!!!");
  res.send("MEOW");
});

app.get("/dogs", (req, res) => {
  //   console.log("Cat Req!!!");
  res.send("woof!!");
});

app.listen(8080, () => {
  console.log("PORT 8080!");
}); //port 설정 및 실행
