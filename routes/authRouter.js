const { loginUser, registerUser , foundUser} = require("../controllers/authController");

const router = require("express").Router();
const auth=require("../middleware/auth")
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/user", auth, foundUser);
module.exports = router;
 //exporting the routes to be used in server.js file