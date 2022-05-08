
export class Discos {
    id: number;
    portada:string;
    titulo: string;
    autor: string;
    duracion: string;
    fechaSalida: string;
    constructor(id: number, portada: string, titulo: string,
        autor: string, duracion: string, fechaSalida: string)
    {
        this.id = id;
        this.portada=portada;
        this.titulo = titulo;
        this.autor = autor;
        this.duracion = duracion;
        this.fechaSalida = fechaSalida;
    }
}