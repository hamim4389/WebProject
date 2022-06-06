const app = require('./app');
const dotenv = require('dotenv');
const  coonectDB = require('./config/db');
const connectDB = require('./config/db');

// CONFIG
dotenv.config({path:"backend/config/config.env"});


//Connect to DB
connectDB();
app.listen(process.env.PORT, ()=>
{
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
});


// UNHANDLED PROMISE