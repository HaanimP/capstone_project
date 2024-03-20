import { connection as db } from "../config/index.js";
import { hash, compare } from "bcrypt";
import { createToken } from "../middleware/AuthenticateUser.js";

class Users {
    async fetchUsers(req, res) {
        try {
            const qry = `
                SELECT userID, firstName, lastName, email, password
                FROM users
            `;
            db.query(qry, (err, results) => {
                if (err) throw err;
                res.json({
                    status: res.statusCode,
                    results,
                });
            });
        } catch (error) {
            console.error("Error fetching users:", error);
            res.status(500).json({ msg: "Error fetching users" });
        }
    }

    async fetchUser(req, res) {
        try {
            const qry = `
                SELECT userID, firstName, lastName, email, password
                FROM users
                WHERE userID = ${db.escape(req.params.id)}
            `;
            db.query(qry, (err, result) => {
                if (err) throw err;
                res.json({
                    status: res.statusCode,
                    result,
                });
            });
        } catch (error) {
            console.error("Error fetching user:", error);
            res.status(500).json({ msg: "Error fetching user" });
        }
    }

    async createUser(req, res) {
        try {
            const { firstName, lastName, email, password } = req.body;
            const hashedPassword = await hash(password, 10);

            const userData = {
                firstName,
                lastName,
                email,
                password: hashedPassword
            };

            const insertQuery = `INSERT INTO users SET ?`;

            db.query(insertQuery, userData, async (err, result) => {
                if (err) {
                    // Check if the email already exists
                    if (err.code === 'ER_DUP_ENTRY') {
                        return res.status(400).json({ msg: "Email already exists. Please use another email address." });
                    } else {
                        throw err;
                    }
                }

                // Create token
                let token = createToken(userData);

                res.status(201).json({
                    status: res.statusCode,
                    token,
                    msg: "You're registered",
                });
            });
        } catch (error) {
            console.error("Error during user creation:", error);
            res.status(500).json({ msg: "Signup error. Please try again." });
        }
    }

    async deleteUsers(req, res) {
        try {
            const qry = `DELETE FROM users;`;
            db.query(qry, (err) => {
                if (err) throw err;
                res.json({
                    status: res.statusCode,
                    msg: "Users are deleted!",
                });
            });
        } catch (error) {
            console.error("Error deleting users:", error);
            res.status(500).json({ msg: "Error deleting users" });
        }
    }

    async deleteUser(req, res) {
        try {
            const qry = `DELETE FROM users WHERE userID=${db.escape(req.params.id)};`;
            db.query(qry, (err) => {
                if (err) throw err;
                res.json({
                    status: res.statusCode,
                    msg: "User is deleted!",
                });
            });
        } catch (error) {
            console.error("Error deleting user:", error);
            res.status(500).json({ msg: "Error deleting user" });
        }
    }

    async login(req, res) {
      try {
          const { email, password } = req.body;
          const qry = `SELECT userID, firstName, lastName, email, password FROM users WHERE email=${db.escape(email)}`;
  
          db.query(qry, async (err, result) => {
              if (err) throw err;
              if (!result?.length) {
                  res.json({
                      status: res.statusCode,
                      msg: "You provided a wrong email address",
                  });
              } else {
                  const validPass = await compare(password, result[0].password);
                  if (validPass) {
                      // Password is correct, generate and return token
                      const token = createToken({
                          email,
                          password,
                      });
                      res.json({
                          status: res.statusCode,
                          msg: "You logged in",
                          token,  // Return token to the client
                      });
                  } else {
                      // Password is incorrect
                      res.json({
                          status: res.statusCode,
                          msg: "Please provide correct password",
                          result,
                      });
                  }
              }
          });
      } catch (error) {
          console.error("Error during login:", error);
          res.status(500).json({ msg: "Login error" });
      }
  }
}

export { Users };