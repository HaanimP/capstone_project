import {connection as db} from "../config/index.js"
class Cart {
  fetchCart(req, res) {
    const qry = `
      SELECT cartID, userID, prodID, quantity
      FROM cart;`;
    db.query(qry, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results
      });
    });
  }

  fetchCartById(req, res) {
    const prodID = db.escape(req.params.id);
    const qry = `
      SELECT cartID, userID, prodID, quantity
      FROM cart
      WHERE prodID=${prodID};`;
    db.query(qry, (err, result) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        result: result[0]
      });
    });
  }

  deleteCart(req, res) {
    const qry = `DELETE FROM cart;`;
    db.query(qry, (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: 'All products were deleted from cart!'
      });
    });
  }

  deleteCartItem(req, res) {
    const prodID = db.escape(req.params.id);
    const qry = `DELETE FROM cart WHERE prodID=${prodID};`;
    db.query(qry, (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: 'Product was deleted from cart!'
      });
    });
  }
}

export { Cart };