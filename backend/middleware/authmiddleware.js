const jwt  = require("jsonwebtoken");


const authenticateUser = (req, res, next) => {
    const token = req.cookies.token || req.headers["x-access-token"] || req.headers["authorization"];
       console.log("token")
    if (!token) {
        return res.status(401).json({ message: "Access Denied. No token provided." });
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded; // Add the decoded user info to the request object
        next(); // Pass control to the next middleware
    } catch (error) {
        res.status(400).json({ message: "Invalid token." });
    }
};

module.exports = authenticateUser;
