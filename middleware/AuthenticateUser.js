import jwt from "jsonwebtoken";
import { config } from "dotenv";

// Load environment variables from .env file
config();

function createToken(user) {
    return jwt.sign({
        email: user.email,
        password: user.password
    },
    process.env.JWT_SECRET, // Use process.env.SECRET_KEY as the JWT secret key
    {
        expiresIn: '1h'
    });
}

function verifyToken(req, res, next) {
    // Retrieve a token from the request headers
    const token = req.headers['authorization'];

    if (token) {
        try {
            // Verify the token using the SECRET_KEY from environment variables
            jwt.verify(token, process.env.JWT_SECRET);
            next(); // Token is valid, proceed to the next middleware
        } catch (error) {
            res?.json({
                status: res.statusCode,
                msg: "Please provide the correct credentials"
            });
        }
    } else {
        res?.json({
            status: res.statusCode,
            msg: "Please provide a token"
        });
    }
}

export { createToken, verifyToken };