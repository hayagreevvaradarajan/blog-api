const express = require("express");
const router = express.Router();

const ping = require("./api/ping.js");
const posts = require("./api/posts.js");

router.get("/ping", ping);

router.get("/posts", posts);

module.exports = router;