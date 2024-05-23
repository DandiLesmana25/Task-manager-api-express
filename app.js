const express = require('express');
const app = express();
const tasks = require('./routes/task')

// Routes
app.get('/', (req,res) => {
    res.send('go to path /api/v1/')
})

app.use('/api/v1/tasks', tasks)


const port = 3000;
app.listen(port, console.log(`server is listening on port ${port}`));