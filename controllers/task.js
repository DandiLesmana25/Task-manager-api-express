const Task = require('../models/task')
const express = require('express');
const app = express();
app.use(express.json());

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.status(200).json({tasks})
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body) 
        res.status(201).json({ task })
                
    } catch (error) {
        res.status(500).json({msg: error});
        
    }
}

  
const getTaskById = async (req, res) => {
    try {
        const {id:taskID} = req.params
        const getTask = await Task.findOne({_id:taskID})
        if (!getTask) { 
            return res.status(404).json({msg: `no task with id ${taskID}`})
        }

        res.status(200).json({ getTask });
    } catch (error) {
        res.status(500).json({msg: error})
        
    }
    
}
const updateTask = async (req, res) => {
    try {
        const {id: taskId} = req.params;
        const task = await Task.findOneAndUpdate({_id: taskId}, req.body, {
            new:true,
            runValidators: true,
        })

        if (!taskId) {
            return res.status(404).json({msg: `no task with id ${taskID}`})
        }

        res.status(200).json({ task });
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

const deleteTask = async (req, res) => {
    try {
        const {id:taskID} = req.params
        const task = await Task.findOneAndDelete({_id: taskID})
        if (!task) {
            return res.status(404).json({msg: `no task with id ${taskID}`})
        } 
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({msg: error})
        
    }
}

module.exports = {getAllTasks, createTask, getTaskById, updateTask, deleteTask};