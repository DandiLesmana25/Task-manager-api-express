const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    // field and validation in mongoose
    name: {
        type: String,
        required: [true, 'must provide name'],
        trim: true,
        maxlength: [20, 'name can not more than 20 characters']
    },
    completed: {
        type: Boolean,
        default: false,
    },
})

module.exports= mongoose.model('Task', taskSchema)