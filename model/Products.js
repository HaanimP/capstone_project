import { connection as db } from "../config/index.js";

class Products {
  fetchCart(req, res) {
    const qry = `
        SELECT prodID, description,quantity,productAmount
        FROM cart
        `;
    db.query(qry, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }
  fetchProducts(req, res) {
    const qry = `
      SELECT prodID, prodName, description, productAmount, prodCategory, prodUrl
      FROM products;
    `;
    db.query(qry, (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }

  fetchProduct(req, res) {
    const qry = `
      SELECT prodID, prodName, description, productAmount, prodCategory, prodUrl
      FROM products WHERE prodID = ?;
    `;
    db.query(qry, [req.params.id], (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      if (result.length === 0) {
        return res.status(404).json({ error: "Product not found" });
      }
      res.json({
        status: res.statusCode,
        result: result[0],
      });
    });
  }

  addProduct(req, res) {
    const data = req.body; // Assuming the request body contains the product data
    const qry = `INSERT INTO products SET ?`;
    db.query(qry, data, (err, result) => {
        if (err) {
            console.error("Error adding product:", err);
            return res.status(500).json({ error: "Failed to add product" });
        }
        console.log("Product added successfully");
        res.status(201).json({
            status: res.statusCode,
            msg: "New product was added",
            prodId: result.insertId // Assuming your database returns the ID of the newly inserted product
        });
    });
}

updateProduct(prodId, productData, res) {
  const qry = `UPDATE products SET ? WHERE prodID = ?`;
  db.query(qry, [productData, prodId], (err, result) => {
      if (err) {
          console.error("Error updating product:", err);
          return res.status(500).json({ error: "Failed to update product" });
      }
      console.log("Product updated successfully");
      res.json({
          status: res.statusCode,
          msg: "Product is updated!",
      });
  });
}

deleteProduct(prodId, res) {
  const qry = `DELETE FROM products WHERE prodID = ?`;
  db.query(qry, prodId, (err, result) => {
      if (err) {
          console.error("Error deleting product:", err);
          return res.status(500).json({ error: "Failed to delete product" });
      }
      console.log("Product deleted successfully");
      res.json({
          status: res.statusCode,
          msg: "Product is deleted!",
      });
  });
}
}

export { Products };