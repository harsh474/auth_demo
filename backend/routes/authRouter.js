//authRouter.js
const express = require("express");
const { user_signup, user_login,user_profile } = require("../controllers/user_controller");
// const auth = require("../middleware/authmiddleware");
const router = express.Router();
// const {auth} = require("../middleware/authmiddleware")
router.post("/signup", user_signup);
router.post("/login", user_login);
router.get("/dashboard",  user_profile); 

module.exports = router;