//To interacte with Database we gonna put async in every function
// and then install express-async-handler
const asyncHandler = require('express-async-handler')

//@desc   Get goals
//@route  Get /api/goals
//@access Private
const getGoals = asyncHandler(async (req,res) => {
    res.status(200).json({message : 'Get goals from controller'})
})

//@desc   Set goals
//@route  Post /api/goals
//@access Private
const createGoal = asyncHandler(async (req,res) => {
    if(!req.body.eleve){
        res.status(400)
        throw new Error('please add a text field')
    }
    res.status(200).json({message : req.body.eleve})
})

//@desc   Update goals
//@route  PUT /api/goals/:id
//@access Private
const updateGoal = asyncHandler( async (req,res) => {
    res.status(200).json({message : `Updated Goal from controller ${req.params.id }`})
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