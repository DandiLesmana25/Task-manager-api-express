const express = require('express');
const app = express();
const tasks = require('./routes/task')
const connectDB = require('./db/connections')
require('dotenv').config()
const notFound = require('./middleware/not-found')

// middleware
app.use(express.static('./public'))
app.use(express.json())


// Routes
app.use('/api/v1/tasks', tasks)

// middleware 404
app.use(notFound);

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