import express from "express";
import { studentRouter } from "./routes/student.js";
import { mentorRouter } from "./routes/mentor.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const PORT=process.env.PORT;

//initiating server
const app=express();

app.use(express.json());
app.use(cors())
app.use("/students", studentRouter)
app.use("/mentors", mentorRouter)

app.listen(PORT, ()=>console.log(`server starterd in locate host: ${PORT}`))