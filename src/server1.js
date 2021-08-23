const express = require("express");
const mongoose = require("mongoose");
const commentController = require("./controllers/comment.controller");
const userController = require("./controllers/user.controller");
const postController = require("./controllers/post.controller");
const tagController = require("./controllers/tag.controller");
const app = express();
app.use(express.json());

const connect = () => {
  return mongoose.connect("mongodb://127.0.0.1:27017/web", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  });
};

app.use("/comment", commentController);
app.use("/users", userController);
app.use("/posts", postController);
app.use("/tag", tagController);

app.listen(2349, async function (req, res) {
  await connect();
  console.log("I am working fine Deepak");
});
