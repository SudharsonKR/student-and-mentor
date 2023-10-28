import express from "express";
import { deleteStudent, editStudent, getAllstudents, getAssignMentorinfo, getStudentbyId, postAssignMentor, postNewStudent } from "../controllers/student.js";

const router=express.Router()

router.get("/all", async(req, res)=>{
    try{
        const students = await getAllstudents(req);
        // return res.status(200).json({data: students})
        if(students.length === 0){
            return res.status(400).json({message:"no data available"})
        }
        return res.status(200).json({data: students})
    }catch(error){
        console.log(error)
        res.status(500).json({message: "internal server error"})
    }
})

router.get("/assignMentorinfo", async(req, res)=>{
    try{
        const assignMentor = await getAssignMentorinfo(req);
     
        if(assignMentor.length === 0){
            return res.status(400).json({message:"no data available"})
        }
        return res.status(200).json({data: assignMentor})
    }catch(error){
        console.log(error)
        res.status(500).json({message: "internal server error"})
    }
})

router.get("/all/:id", async(req, res)=>{
    try{
        const {id}=req.params;
        const students = await getStudentbyId(id);
        // return res.status(200).json({data: students})
        if(students.length === 0){
            return res.status(400).json({message:"no data available"})
        }
        return res.status(200).json({data: students})
    }catch(error){
        console.log(error)
        res.status(500).json({message: "internal server error"})
    }
})

//create student info
router.post("/add", async(req, res)=>{
    try{
        const newStudent=req.body;
        console.log(newStudent)

        if(!newStudent){
            return res.status(400).json({message:"Data not provided"})
        }
        const result=await postNewStudent(newStudent);
        if(!result){
            return res.status(400).json({message: "Error posting Data"})
        }
        res.status(201).json({data: newStudent, status: result})
    } catch(error){
        console.log(error);
        res.status(500).json({message: "Internal Server Error"})
    }
})

//Assign a student to Mentor

router.post("/assignMentor", async(req, res)=>{
    const assignmentor=req.body;
    const result=await postAssignMentor(assignmentor)
    res.send({data: result})
})
//edit student
router.put("/edit/:id", async(req, res)=>{
    try{
       const {id}=req.params;
       const updateStudent=req.body;
       if(!id || !updateStudent){
        return res.status(400).json({message: "wrong request"})
       }
       
       const result= await editStudent(id, updateStudent);
       if(!result){
return res.status(400).json({message:"Error Editing Data"})
       }
       return res.status(200).json({data: updateStudent, status: result})
    } catch(error){
        console.log(error);
        res.status(500).json({message: "Internal Server Error"})
    }
})

router.delete("/delete/:id", async(req, res)=>{
    try{
        const {id}=req.params;
        if(!id){
            return res.status(400).json({message:"wrong request"})
        }
        const result = await deleteStudent(id)
        if(result.deletedCount<=0){
            return res.status(400).json({message: "Data not there (or) already removed"})
        }
        return res.status(200).json({data: result})
    }catch(error){
        console.log(error)
        res.status(500).json({message: "Internal Server Error"})
    }
})

//show all students for a particular mentor

router.get('/:AssignedMentor', async(req, res) => {
        // console.log(req.params)
        try{
            const {AssignedMentor}=req.params;
            console.log(AssignedMentor)
            const mentor = await getAssignMentorinfo(req);
            console.log(mentor)
            const mentorname = mentor.filter((val) => val.AssignedMentor === AssignedMentor)
           if(mentor.length === 0){
                return res.status(400).json({message:"no data available"})
            }
            else{
                return res.status(200).json({data: mentorname})
            }            
        }catch(error){
            console.log(error)
            res.status(500).json({message: "internal server error"})
        }
      });

export const studentRouter = router;