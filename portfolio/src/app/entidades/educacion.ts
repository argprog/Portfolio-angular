export class Educacion {
    id: number;
    institucion: string;
    fecha: string;
    titulo: string;

    constructor(institucion: string, fecha: string, titulo: string){
        this.institucion=institucion;
        this.fecha=fecha;
        this.titulo=titulo;
    }
}
