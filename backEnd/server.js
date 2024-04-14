//mongodb+srv://techyinfo05:SAakd2YJXd5yjpj4@cluster0.pothzah.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
const express =require("express");
const mongodb = require("mongoose");
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongodb .connect('mongodb+srv://techyinfo05:SAakd2YJXd5yjpj4@cluster0.pothzah.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
const connection = mongodb.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

// Define routes
const foodieRouter = require('./Routes/foodie');
const menuRouter = require('./Routes/menu');
app.use('/foodies', foodieRouter);
app.use('/menus',menuRouter)
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});