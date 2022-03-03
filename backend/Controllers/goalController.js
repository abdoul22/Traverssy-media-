//To interacte with Database we gonna put async in every function
// and then install express-async-handler
const asyncHandler = require('express-async-handler')
const Goal = require('../models/goalModel')


//@desc   Get goals
//@route  Get /api/goals
//@access Private
const getGoals = asyncHandler(async (req,res) => {
    const goals = await Goal.find()

    res.status(200).json({message : `All Goals ${goals}`})
})

//@desc   Set goals
//@route  Post /api/goals
//@access Private
const createGoal = asyncHandler(async (req,res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('please add a text field')
    }
    const goal = await Goal.create({
        text: req.body.text
    })
    res.status(200).json(goal)
})

//@desc   Update goals
//@route  PUT /api/goals/:id
//@access Private
const updateGoal = asyncHandler( async (req,res) => {

    const checkGoal = await Goal.findById(req.params.id)
    if (!checkGoal){
        res.status(400).json({message : 'Goal does\'n exist'})
        throw new Error('Goal not found')
    }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, { new : true})

    res.status(200).json({updatedGoal})
})

//@desc   Delete goals
//@route  Delete /api/goals/:id
//@access Private
const deleteGoal = asyncHandler(async (req,res) => {
    res.status(200).json({message : `Delete Goal from controller  ${req.params.id }`})
})

module.exports = {
    getGoals, createGoal,updateGoal,deleteGoal
} 