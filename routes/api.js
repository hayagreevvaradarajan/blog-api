const express = require("express");
const router = express.Router();

const ping = require("../routes/ping.js");
const posts = require("../routes/posts.js");

router.get("/ping", ping);

router.get("/posts", posts);

module.exports = router