 const mongoose = require('mongoose')

 const goalShema = mongoose.Schema({
     text : {
         type : String,
         required : [true, 'Please enter a text value form shema']
     }
 },
 {
    timestamps : true
 })

 module.exports = mongoose.model('Goal', goalShema)