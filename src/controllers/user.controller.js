//--------------CRUD Operations for Users---------------------------//
const express = require("express");
const User = require("../models/user.model");
const router = express.Router();

//post request
router.post("", async function (req, res) {
  try {
    const user = await User.create(req.body);
    res.status(201).send(user);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

//Get all request
router.get("", async function (req, res) {
  try {
    const user = await User.find().lean().exec();
    return res.status(201).send(user);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

//Get by id request
router.get("/:id", async function (req, res) {
  try {
    const user = await User.findById(req.params.id).lean().exec();
    return res.status(201).send(user);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

//Patch or update request
router.patch("/:id", async function (req, res) {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(201).send(user);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

//Delete by Id Request
router.delete("/:id", async function (req, res) {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    return res.status(201).send(user);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

router.get("/:id/posts", async function (req, res) {
  const userPosts = await Post.find({ userId: req.params.id }).lean().exec();
  const user = await User.findById(req.params.id);
  return res.status(200).json({ posts: userPosts, user: user });
});

module.exports = router;
