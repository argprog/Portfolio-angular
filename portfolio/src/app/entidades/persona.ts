export class Persona {
    id:number;
    nombre:string;
    apellido:string;
    certificacion:string;
    profesion:string;
    correo_electronico:string;
    telefono:string;
 

    constructor(nombre:string, apellido:string, certificacion:string, 
        profesion:string, correo_electronico:string, telefono:string){
            this.nombre=nombre;
            this.apellido=apellido;
            this.certificacion=certificacion;
            this.profesion=profesion;
            this.correo_electronico=correo_electronico;
            this.telefono=telefono;
          
        }

}
