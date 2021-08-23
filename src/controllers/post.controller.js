//--------------CRUD Operations for Posts---------------------------//
const express = require("express");
const Post = require("../models/post.model");
const router = express.Router();
//post/users request
router.post("", async function (req, res) {
  try {
    const post = await Post.create(req.body);
    return res.status(201).send(post);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

//Get all request
router.get("", async function (req, res) {
  try {
    const post = await Post.find()
      .populate("userId")
      .populate("tagIds")
      .lean()
      .exec();
    return res.status(201).send(post);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

//Get by id request
router.get("/:id", async function (req, res) {
  try {
    const post = await Post.findById(req.params.id).lean().exec();
    return res.status(201).send(post);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

//Patch or update request
router.patch("/:id", async function (req, res) {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(201).send(post);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

//Delete by Id Request
router.delete("/:id", async function (req, res) {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    return res.status(201).send(post);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});
module.exports = router;
