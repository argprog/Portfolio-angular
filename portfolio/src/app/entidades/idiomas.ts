export class Idiomas {
    id:number;
    nombre:string;
    nivel:string;
    imagen: string;

    constructor(nombre:string, nivel:string, imagen: string){
        this.nombre=nombre;
        this.nivel=nivel;
        this.imagen=imagen;
    }
}
