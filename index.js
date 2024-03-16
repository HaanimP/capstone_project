import { express, userRouter } from "./controllers/UserController.js";
import { productRouter } from "./controllers/ProductController.js";
import cookieParser from "cookie-parser";
import { errorHandling } from "./middleware/ErrorHandling.js";
import path from 'path'
import { config } from "dotenv";
import cors from 'cors'
import { cartRouter } from "./controllers/CartController.js";
config()

const app=express()
const port = +process.env.PORT || 4001

//Middleware
app.use((req,res,next)=>{
res.header("Access-Control-Allow-Origin","*")
res.header("Access-Control-Allow-Credentials","*")
res.header("Access-Control-Allow-Methods","*")
res.header("Access-Control-Request-Methods","*")
res.header("Access-Control-Allow-Headers","*")
res.header("Access-Control-Expose-Headers","*");
next();
}) 

app.use(
    express.static('./static'),
    express.json(),
    express.urlencoded({
        extended:true,
    }),
    cookieParser(),
    cors()
)
app.get('^/$', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, './static/index.html'));
});
// users
app.use('/users',userRouter)

app.post('/users', (req, res) => {
    const userData = req.body;
    users.addUser(userData, res);
});

app.patch('/users/:id', (req, res) => {
    const userId = req.params.id;
    const userData = req.body;
    users.updateUser(userId, userData, res);
});

app.delete('/users/:id', (req, res) => {
    const userId = req.params.id;
    users.deleteUser(userId, res);
});

// Products 
app.use('/products',productRouter)

app.post('/products', (req, res) => {
    products.addProduct(req, res);
});

app.patch('/products/:id', (req, res) => {
    products.updateProduct(req, res);
});

app.delete('/products', (req, res) => {
    products.deleteProducts(req, res);
});

app.delete('/products/:id', (req, res) => {
    products.deleteProduct(req, res);
});

//cart
app.use('/cart',cartRouter)

app.get('/cart/:userId', (req, res) => {
    const userId = req.params.userId;
    cart.fetchCart(userId, res);
});

app.delete('/cart/:userId/:itemId', (req, res) => {
    const userId = req.params.userId;
    const itemId = req.params.itemId;
    cart.deleteItemFromCart(userId, itemId, res);
});

app.use(errorHandling)
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})