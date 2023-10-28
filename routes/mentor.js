import express from "express";
import { deleteMentor, getAllmentors, getmentorbyId, postNewMentor } from "../controllers/mentor.js";

const router=express.Router()

router.get("/Allmentors", async(req, res)=>{
    try{
        const mentors = await getAllmentors(req);
        
        if(mentors.length === 0){
            return res.status(400).json({message:"no data available"})
        }
        return res.status(200).json({data: mentors})
    }catch(error){
        console.log(error)
        res.status(500).json({message: "internal server error"})
    }
})

router.get("/Allmentors/:id", async(req, res)=>{
    try{
        const {id}=req.params;
        const mentors = await getmentorbyId(id);
        if(mentors.length === 0){
            return res.status(400).json({message:"no data available"})
        }
        return res.status(200).json({data: mentors})
    }catch(error){
        console.log(error)
        res.status(500).json({message: "internal server error"})
    }
})

//add mentor info
router.post("/addmentor", async(req, res)=>{
    try{
        const newMentor=req.body;
        console.log(newMentor)

        if(!newMentor){
            return res.status(400).json({message:"Data not provided"})
        }
        const result=await postNewMentor(newMentor);
        if(!result){
            return res.status(400).json({message: "Error posting Data"})
        }
        res.status(201).json({data: newMentor, status: result})
    } catch(error){
        console.log(error);
        res.status(500).json({message: "Internal Server Error"})
    }
})

//delete mentor info
router.delete("/deleteMentor/:id", async(req, res)=>
{
    try{
        const {id}=req.params;
        if(!id){
            return res.status(400).json({message:"wrong request"})
        }
        const result = await deleteMentor(id)
        if(result.deletedCount<=0){
            return res.status(400).json({message: "Data not there (or) already removed"})
        }
        return res.status(200).json({data: result})
    }catch(error){
        console.log(error)
        res.status(500).json({message: "Internal Server Error"})
    }
})



export const mentorRouter = router;