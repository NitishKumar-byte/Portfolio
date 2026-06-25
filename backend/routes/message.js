const express = require("express");
const router = express.Router();

const Message = require("../models/Message");

// Save Message
router.post("/", async (req, res) => {
  try {
    const message = await Message.create(req.body);

    res.status(201).json(message);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// Get All Messages
router.get("/", async (req, res) => {
  try {
    const messages = await Message.find().sort({
      createdAt: -1,
    });

    res.json(messages);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;