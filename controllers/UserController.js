import express from "express"
import bodyParser from "body-parser";
import { users } from "../model/index.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { verifyToken } from "../middleware/AuthenticateUser.js";

const userRouter=express.Router()
//fetch users
userRouter.get('/',(req,res)=>{
    try{
        users.fetchUsers(req,res)
    }catch(e){
        res.json({
            status:res.statusCode,
            msg:'failed to retrieve users'
        })
    }
})
//fetch user
userRouter.get('/:id',(req,res)=>{
    try{
        users.fetchUser(req,res)
    }catch(e){
        res.json({
            status:res.statusCode,
            msg:'failed to retrieve a user'
        })
    }
})
userRouter.patch('/update/:id', bodyParser.json(),(req,res)=>{
    try{
        users.updateUser(req,res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'Update failed'
        })
    }
})
//add a user
userRouter.post('/signup', async (req, res) => {
    const { firstName, lastName, email, password, phone } = req.body; 
    const hashedPassword = await bcrypt.hash(password, 8);
    const username = email; 
  
    db.query(
      'INSERT INTO users (username, email, password, firstName, lastName, phone) VALUES (?, ?, ?, ?, ?, ?)', 
      [username, email, hashedPassword, firstName, lastName, phone], // Updated parameter list
      (err, results) => {
        if (err) {
          return res.status(500).send(err);
        }
  
        const token = jwt.sign({ id: results.insertId }, 'JWT_SECRET', { // Ensure 'JWT_SECRET' is properly managed and replaced with your actual secret
          expiresIn: 86400 
        });
  
        res.status(201).send({ token });
      }
    );
  });
  
userRouter.delete('/deleteUsers',(req,res)=>{
    try{
        users.deleteUsers(req,res)

    }catch(e){

        res.json({
            status:res.statusCode,
            msg:'failed to delete users',
        })
    }
})

userRouter.delete('/delete/:id',(req,res)=>{
    try{
        users.deleteUser(req,res)

    }catch(e){

        res.json({
            status:res.statusCode,
            msg:'failed to delete a user',
        })
    }
})

userRouter.post('/login', (req,res)=>{
    try{
        users.login(req,res)
    }catch(e){
        res.json({
            status : req.statusCode,
            msg : 'failed to login'
        })
    }
})

export{
    userRouter,express
}