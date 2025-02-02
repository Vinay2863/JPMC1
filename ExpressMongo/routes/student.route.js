
const express=require('express')
const routes=express.Router()
const studentModel=require('../models/student.model')
const {getAllStudents,getCertainStudent,editStudent,addStudent,deleteStudent}=require('../controller/student.controller')



routes.use(express.json())
routes.use(express.urlencoded({extended:true}))




routes.get('/',getAllStudents)

routes.get('/:id',getCertainStudent)

routes.put('/:id',editStudent)

routes.delete('/:id',deleteStudent)

routes.post('/',addStudent)


module.exports=routes;
