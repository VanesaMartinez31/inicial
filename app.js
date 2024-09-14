import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'; 
import {test} from "./backend/controllers/alumno.cotrollers.js"

dotenv.config()

mongoose.connect(process.env.urlbd)
.then(()=>{
    console.log("funciona la conexion a la base de datos")
})
.catch((error)=>{
    console.log("no funciona la conexion", error)
})

const app = express();
app.use(cors())

app.listen(4000,()=> {
    console.log("Se escucha bien")
})

test()