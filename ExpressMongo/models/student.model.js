const mongoose=require('mongoose');
const studentSchema=mongoose.Schema({
    _id:Number,
    name:String,
    branch:String
})

const studentModel=mongoose.model("student",studentSchema);
module.exports=studentModel;