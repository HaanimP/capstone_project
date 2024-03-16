import {connection as db} from "../config/index.js"
class Cart {
  fetchCart(userId, res) {
      const qry = `SELECT * FROM cart WHERE userId = ?`;
      db.query(qry, userId, (err, results) => {
          if (err) {
              console.error("Error fetching cart:", err);
              return res.status(500).json({ error: "Failed to fetch cart" });
          }
          res.json({
              status: res.statusCode,
              cart: results
          });
      });
  }

  deleteItemFromCart(userId, itemId, res) {
      const qry = `DELETE FROM cart WHERE userId = ? AND itemId = ?`;
      db.query(qry, [userId, itemId], (err, result) => {
          if (err) {
              console.error("Error deleting item from cart:", err);
              return res.status(500).json({ error: "Failed to delete item from cart" });
          }
          console.log("Item deleted from cart successfully");
          res.json({
              status: res.statusCode,
              msg: "Item deleted from cart!"
          });
      });
  }
}
export{
   Cart
}