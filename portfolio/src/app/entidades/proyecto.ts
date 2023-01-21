export class Proyecto {
    id:number;
    institucion:string;
    fecha:string;
    nombre:string;
    imagen: string;

    constructor(institucion:string, fecha:string, nombre:string, imagen:string){
        this.institucion=institucion;
        this.fecha=fecha;
        this.nombre=nombre;
        this.imagen=imagen;
    }
}
