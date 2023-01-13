import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SProyectoService } from 'src/app/servicios/s-proyecto.service';

@Component({
  selector: 'app-nuevo-proyecto',
  templateUrl: './nuevo-proyecto.component.html',
  styleUrls: ['./nuevo-proyecto.component.css']
})
export class NuevoProyectoComponent implements OnInit {

  form:FormGroup;

  constructor(private sProyecto:SProyectoService, 
              private router:Router,
              private formBuilder:FormBuilder) {
              
              this.form=this.formBuilder.group({
                institucion:['',[Validators.required]],
                fecha:['',[Validators.required]],
                nombre:['',[Validators.required]],
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

  get Nombre(){
    return this.form.get("nombre");
  }

  crearProyecto():void{
    this.sProyecto.crearProyecto(this.form.value).subscribe(
      data=>{
      //   alert ("Se agregó experiencia");
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
      this.crearProyecto();
      alert ("Proyecto creado");
      this.router.navigate(['']);
    }else{
      alert ("Falló la carga. Intente nuevamente.");
      this.form.markAllAsTouched();
    }

    }
}