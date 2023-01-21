export class Persona {
    id:number;
    nombre:string;
    apellido:string;
    certificacion:string;
    profesion:string;
    correo_electronico:string;
    telefono:string;
    imagen:string;
 

    constructor(nombre:string, apellido:string, certificacion:string, 
        profesion:string, correo_electronico:string, telefono:string, email:string, clave:string, imagen:string){
            this.nombre=nombre;
            this.apellido=apellido;
            this.certificacion=certificacion;
            this.profesion=profesion;
            this.correo_electronico=correo_electronico;
            this.telefono=telefono;
            this.imagen=imagen;
          
        }

}
