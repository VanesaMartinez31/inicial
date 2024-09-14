import { modeloAlumnos } from "../models/alumno.model.js"

modeloAlumnos.create({
    name:"Vanesa",
    apepat:"Martinez",
    edad:23 
})

export const test = ()=>{
    console.log("Se está mandando a llamar correctamente el controlador")
}