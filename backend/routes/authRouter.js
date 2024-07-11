const express = require("express");
const jwt = require("jsonwebtoken");
const { user_signup, user_login, user_profile } = require("../controllers/user_controller");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello from the server side");
});

router.post("/signup", user_signup);
router.post("/login", user_login);
router.get("/dashboard", protected_route, user_profile);

function protected_route(req, res, next) {
    console.log("Protected route called");
    try {
        // Retrieve the token from cookies
        let token = req.cookies.auth_token;

        if (!token) {
            return res.status(401).json({ msg: "No token, authorization denied" });
        }

        console.log("Cookie is ", req.cookies.auth_token);

        // Verify the JWT using the secret key
        const decoded = jwt.verify(token, process.env.SECRET_KEY);

        console.log("Verification Done Successfully");

        // Attach user information to request object
        req.user = decoded;
        
        next(); // Move to the next middleware or route handler
    } catch (err) {
        console.error('JWT verification failed:', err.message);
        return res.status(401).json({ msg: "Token is not valid" });
    }
}

module.exports = router;
