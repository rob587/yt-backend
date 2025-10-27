const express = require("express");
const router = express.Router();
const videoController = require("../controller/VideosController");

// crud index
router.get("/", videoController.index);

// crud show
router.get("/:id", videoController.show);

module.exports = router;
