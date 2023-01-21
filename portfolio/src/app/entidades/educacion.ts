export class Educacion {
    id: number;
    institucion: string;
    fecha: string;
    titulo: string;
    imagen: string;

    constructor(institucion: string, fecha: string, titulo: string, imagen: string){
        this.institucion=institucion;
        this.fecha=fecha;
        this.titulo=titulo;
        this.imagen=imagen;
    }
}
