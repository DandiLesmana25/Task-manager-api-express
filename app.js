const express = require('express');
const app = express();
const tasks = require('./routes/task')
const connectDB = require('./db/connections')
require('dotenv').config()
// const bp = require('body-parser')
// app.use(bp.json())
// app.use(bp.urlencoded({ extended: true }))

// middleware
app.use(express.static('./public'))
app.use(express.json())


// Routes
app.use('/api/v1/tasks', tasks)


const port = 3000;
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening on port ${port}`));
    } catch (error) {
        console.log(error);
        
    }
}

start();