import { NumberInput } from "@angular/cdk/coercion";


export class Artistas {
    id: number;
    nombreartistico:string;
    nombrenacimiento: string;
    imagen: string;
    fechanacimiento: string;
    edad: string;
    nacionalidad: string;
    sexo: string;
    detalles: string;
    
    constructor(id: number, imagen: string, nombreartistico: string,
        nombrenacimiento: string, fechanacimiento: string, edad: string,
        nacionalidad: string, sexo: string, detalles: string)
    {
        this.id = id;
        this.nombreartistico=nombreartistico;
        this.nombrenacimiento = nombrenacimiento;
        this.imagen = imagen;
        this.fechanacimiento = fechanacimiento;
        this.edad = edad;
        this.nacionalidad = nacionalidad;
        this.sexo = sexo;
        this.detalles = detalles;
    }
}