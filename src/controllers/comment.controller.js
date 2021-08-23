//--------------CRUD Operations for comment---------------------------//

const express = require("express");
const Comment = require("../models/comment.model");
const router = express.Router();
//post  request
router.post("", async function (req, res) {
  try {
    const comment = await Comment.create(req.body);
    res.status(201).send(comment);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

//Get all request
router.get("", async function (req, res) {
  try {
    const comment = await Comment.find().lean().exec();
    return res.status(201).send(comment);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

//Get by id request
router.get("/:id", async function (req, res) {
  try {
    const comment = await Comment.findById(req.params.id).lean().exec();
    return res.status(201).send(comment);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

//Patch or update request
router.patch("/:id", async function (req, res) {
  try {
    const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(201).send(comment);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

//Delete by Id Request
router.delete("/:id", async function (req, res) {
  try {
    const comment = await Comment.findByIdAndDelete(req.params.id);
    return res.status(201).send(comment);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

module.exports = router;
