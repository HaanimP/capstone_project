import express from "express";
import bodyParser from "body-parser";
import { Users } from "../model/Users.js"; // Assuming the correct path to the Users model

const userRouter = express.Router();
const users = new Users(); // Instantiating the Users class

// Fetch users
userRouter.get('/', async (req, res) => {
    try {
        await users.fetchUsers(req, res);
    } catch (e) {
        res.status(500).json({
            status: res.statusCode,
            msg: 'Failed to retrieve users'
        });
    }
});

// Fetch user
userRouter.get('/:id', async (req, res) => {
    try {
        await users.fetchUser(req, res);
    } catch (e) {
        res.status(500).json({
            status: res.statusCode,
            msg: 'Failed to retrieve a user'
        });
    }
});

// Update user
userRouter.patch('/update/:id', bodyParser.json(), async (req, res) => {
    try {
        await users.updateUser(req.params.id, req.body, res);
    } catch (e) {
        res.status(500).json({
            status: res.statusCode,
            msg: 'Update failed'
        });
    }
});

// Add a user
userRouter.post('/register', bodyParser.json(), async (req, res) => {
    try {
        await users.createUser(req, res);
    } catch (e) {
        res.status(500).json({
            status: res.statusCode,
            msg: 'Failed to add new user'
        });
    }
});

// Delete all users
userRouter.delete('/deleteUsers', async (req, res) => {
    try {
        await users.deleteUsers(req, res);
    } catch (e) {
        res.status(500).json({
            status: res.statusCode,
            msg: 'Failed to delete users'
        });
    }
});

// Delete a user
userRouter.delete('/delete/:id', async (req, res) => {
    try {
        await users.deleteUser(req.params.id, res);
    } catch (e) {
        res.status(500).json({
            status: res.statusCode,
            msg: 'Failed to delete a user'
        });
    }
});

// User login
userRouter.post('/login', async (req, res) => {
    try {
        await users.login(req, res);
    } catch (e) {
        res.status(500).json({
            status: res.statusCode,
            msg: 'Failed to login'
        });
    }
});

export { userRouter };
