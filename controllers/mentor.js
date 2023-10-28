import { ObjectId } from "bson";
import { client } from "../db.js";

export function getAllmentors(req){
    return client.db("StudentData")
    .collection("mentorlist")
    .find(req.query)
    .toArray();
}

export function getmentorbyId(id){
    return client.db("StudentData")
    .collection("mentorlist")
    .findOne({_id: new ObjectId(id)})
    }

export function postNewMentor(data){
    return client.db("StudentData")
    .collection("mentorlist")
    .insertOne(data)
}

export function deleteMentor(id){
    return client.db("StudentData")
    .collection("mentorlist")
    .deleteOne({_id: new ObjectId(id)})
}

