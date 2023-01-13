export class Proyecto {
    id:number;
    institucion:string;
    fecha:string;
    nombre:string;

    constructor(institucion:string, fecha:string, nombre:string){
        this.institucion=institucion;
        this.fecha=fecha;
        this.nombre=nombre;
    }
}
