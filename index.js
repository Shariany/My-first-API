const express = require('express');
const connectDB = require("./db")

require("dotenv").config();

const Product = require("./models/Product");

const app = express();


//Middleware
app.use(express.json());

app.get('/',(request, response) => {
    response.send('Welcome to my backend server!');
});

//Https methods : GET, POST, PUT, DELETE,PATCH

app.get('/about', (req, res) => {
    response.send('This is the about page');
});
app.get('/contact', (req, res) => {
    response.send('This is the contact page');
});

//Route parameters
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send('User ID is: ' + userId);
});

//Query parameters
app.get('/search', (req, res) => {
    const query = req.query.q;
    res.send('You searched for: ' + query);
})

//JSON response
app.get('products', (req, res) => {
    const products = [
        { id: 1, name: 'product 1', price: 100 },
        { id: 2, name: 'product 2', price: 200 },
        { id: 3, name: 'product 3', price: 300 },
    ];
    res.json(products)
})
//Post request
app.post('/products', (req, res) => {

    const {name, price} = req.body;

    const newProduct = {
        id: products.length + 1,
        name,
        price,
    }
    products.push(newProduct);

    res.json({
        message: "Product has been created successfully",
        product: newProduct
    })
})

app.post('/save-product', async (req, res) => {
    try{
        const product = new Product(req.body);
        await product.save();
        res.json(product);
    } catch (error) {
       res.status(500).json(error: error.message)
    }
})

app.listen(process.env.PORT, ()=> {
    console.log('Server is running on port '+ pr);
});

connectDB();