import { Schema, model } from "mongoose";

const EsquemaAlaumnos = new Schema({
    name:{      
    type:String
    },
apepat:{
    type:String
    },
edad:{
    type: Number
    }  
})

export const modeloAlumnos = new model("Tabla de alumnos", EsquemaAlaumnos)

