const express = require("express");
const router = express.Router();
const { createFood, getFooditems } = require("../controller/food.controller");
const { authFoodPartnerMiddleware, authUserMiddleware } = require("../middleware/auth.middlware");
const multer = require("multer");
const upload = multer({
    storage: multer.memoryStorage(),
})


router.post("/", authFoodPartnerMiddleware, upload.single("video"), createFood);
router.get("/", authUserMiddleware, getFooditems);

module.exports = router