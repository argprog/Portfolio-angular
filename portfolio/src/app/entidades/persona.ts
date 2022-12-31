export class Persona {
    id?:number;
    nombre:String;
    apellido:String;
    certificacion:String;
    profesion:String;
    correo_electronico:String;
    telefono:String;
    email:String;
    clave:String;

    constructor(nombre:String, apellido:String, certificacion:String, 
        profesion:String, correo_electronico:String, telefono:String, 
        email:String, clave:String){
            this.nombre=nombre;
            this.apellido=apellido;
            this.certificacion=certificacion;
            this.profesion=profesion;
            this.correo_electronico=correo_electronico;
            this.telefono=telefono;
            this.email=email;
            this.clave=clave;
        }

}
