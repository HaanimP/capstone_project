import express from 'express';
import { Cart } from '../model/index.js';

const cartRouter = express.Router();
const cart = new Cart();

// Fetch all cart items for a user
cartRouter.get('/:userId', (req, res) => {
    try {
        const userId = req.params.userId;
        cart.fetchCart(userId, res);
    } catch (e) {
        res.status(500).json({
            status: res.statusCode,
            msg: 'Failed to retrieve cart items'
        });
    }
});

// Delete a specific item from the cart
cartRouter.delete('/:userId/:itemId', (req, res) => {
    try {
        const userId = req.params.userId;
        const itemId = req.params.itemId;
        cart.deleteItemFromCart(userId, itemId, res);
    } catch (e) {
        res.status(500).json({
            status: res.statusCode,
            msg: 'Failed to delete item from cart'
        });
    }
});

export { cartRouter };