import { MongoClient } from "mongodb";
import dotenv from "dotenv";
// import obj from "mongodb";

dotenv.config();
const mongoconnectstring = process.env.MOGO_URL;

export async function dbConnection(){
    const client = new MongoClient(mongoconnectstring);
    await client.connect();
    console.log("Data Base connected successuflly");
   
    return client
}

// export var ObjectId=obj.ObjectId
export const client =await dbConnection();