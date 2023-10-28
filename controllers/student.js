import { ObjectId } from "bson";
import { client } from "../db.js";

export function getAllstudents(req){
    return client.db("StudentData") 
    .collection("studentlist")
    .find(req.query)
    .toArray();
}



export function getStudentbyId(id){
    return client.db("StudentData")
    .collection("studentlist")
    .findOne({_id: new ObjectId(id)})
    }

export function postNewStudent(data){
    return client.db("StudentData")
    .collection("studentlist")
    .insertOne(data)
}

export function postAssignMentor(data){
    return client.db("StudentData")
    .collection("mentorStudents")
    .insertOne(data)
}

export function getAssignMentorinfo(req){
    return client.db("StudentData")
    .collection("mentorStudents")
    .find(req.query)
    .toArray();
}

export function editStudent(id, data){
    return client.db("StudentData")
    .collection("studentlist")
    .findOneAndUpdate({_id: new ObjectId(id)}, {$set:data})
}

export function deleteStudent(id){
    return client.db("StudentData")
    .collection("studentlist")
    .deleteOne({_id: new ObjectId(id)})
}