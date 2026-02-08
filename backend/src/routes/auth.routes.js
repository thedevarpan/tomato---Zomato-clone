const express = require("express");
const router = express.Router();
const { registerUser, loginUser, logoutUser, registerFoodPartner, loginFoodpartner, logoutFoodPartner } = require("../controller/auth.controller");

/* User auth api*/
router.post("/user/register", registerUser);
router.post("/user/login", loginUser);
router.get("/user/logout", logoutUser);

/* Food partner auth api */
router.post("/food-partner/register", registerFoodPartner);
router.post("/food-partner/login", loginFoodpartner);
router.get("/food-partner/logout", logoutFoodPartner);


module.exports = router;