import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SEducacionService } from 'src/app/servicios/s-educacion.service';

@Component({
  selector: 'app-nueva-educacion',
  templateUrl: './nueva-educacion.component.html',
  styleUrls: ['./nueva-educacion.component.css']
})
export class NuevaEducacionComponent implements OnInit {

  form:FormGroup;

  constructor(private sEducacion:SEducacionService, 
              private router:Router,
              private formBuilder:FormBuilder) {
              
              this.form=this.formBuilder.group({
                institucion:['',[Validators.required]],
                fecha:['',[Validators.required]],
                titulo:['',[Validators.required]],
                imagen:['',[Validators.required]],
              })
            }

  ngOnInit(): void {

  }

  get Institucion(){
    return this.form.get("institucion");
  }

  get Fecha(){
    return this.form.get("fecha");
  }

  get Titulo(){
    return this.form.get("titulo");
  }

  get Imagen(){
    return this.form.get("imagen");
  }

  crearEducacion():void{
    this.sEducacion.crearEducacion(this.form.value).subscribe(
      data=>{
      //   alert ("Se agregó educacion");
      //   this.router.navigate(['']);
      // },err=>{
      //   alert ("Falló");
      //   this.router.navigate(['']);
      }
      )
  }

  onEnviar(event:Event){
    event.preventDefault;
    if (this.form.valid){
      this.crearEducacion();
      alert ("Educacion creada");
      this.router.navigate(['']);
    }else{
      alert ("Falló la carga. Intente nuevamente.");
      this.form.markAllAsTouched();
    }

    }
}
