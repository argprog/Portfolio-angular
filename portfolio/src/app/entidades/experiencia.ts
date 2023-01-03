export class Experiencia {
    id?: number;
    empresa: string;
    fecha_inicio: string;
    fecha_fin: string;
    puesto: string;

    constructor(empresa: string, fecha_inicio: string, fecha_fin: string, puesto: string){
        this.empresa=empresa;
        this.fecha_inicio=fecha_inicio;
        this.fecha_fin=fecha_fin;
        this.puesto=puesto;

    }

}
