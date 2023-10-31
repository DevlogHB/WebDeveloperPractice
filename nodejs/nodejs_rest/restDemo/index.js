const express = require("express");
const app = express();
const path = require("path");
const { v4: uuid } = require("uuid");
const methodOberride = require("method-override");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOberride("_method"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

let comments = [
  {
    id: uuid(),
    username: "Todd",
    comment: "lol that is so funny!",
  },
  {
    id: uuid(),
    username: "Skyler",
    comment: "I like to go birdwatching with my dog",
  },
  {
    id: uuid(),
    username: "Skberboi",
    comment: "Plz delete your account, Todd",
  },
  {
    id: uuid(),
    username: "onlysayswoof",
    comment: "woof woof woof",
  },
];

app.get("/comments", (req, res) => {
  console.log("port 8080");
  res.render("comments/index", { comments });
});

app.get("/comments/new", (req, res) => {
  res.render("comments/new");
});

app.post("/comments", (req, res) => {
  //   console.log(req.body);
  const { username, comment } = req.body;
  comments.push({ username, comment, id: uuid() });
  res.redirect("/comments"); //302 code
});

app.get("/comments/:id", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render("comments/show", { comment });
});

app.patch("/comments/:id", (req, res) => {
  const { id } = req.params;
  const newComment = req.body.comment;
  const foundComment = comments.find((c) => c.id === id);
  foundComment.comment = newComment;
  res.redirect("/comments"); //302 code
});

app.get("/comments/:id/edit", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render("comments/edit", { comment });
});

app.delete("/comments/:id", (req, res) => {
  const { id } = req.params;
  comments = comments.filter((c) => c.id !== id);
  res.redirect("/comments"); //302 code
});

//getpost.html
// app.get("/tacos", (req, res) => {
//   res.send("GET/TACOS response");
// });

// app.post("/tacos", (req, res) => {
//   console.log(req.body);
//   const { meat, qty } = req.body;
//   res.send(`OK, here are your ${meat} ${qty}`);
// });

app.listen(8080, () => {
  console.log("port 8080");
});

// get /comments - list all comments
// post /comments - create a new comments
// get /comments/:id - get one comments(using ID)
// PATCH /comments/:id - update one comment
// delete /comments/:id - destroy one comment
