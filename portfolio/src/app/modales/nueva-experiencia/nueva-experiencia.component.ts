import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/entidades/experiencia';
import { SExperienciaService } from 'src/app/servicios/s-experiencia.service';

@Component({
  selector: 'app-nueva-experiencia',
  templateUrl: './nueva-experiencia.component.html',
  styleUrls: ['./nueva-experiencia.component.css']
})
export class NuevaExperienciaComponent implements OnInit {
form:FormGroup;

  constructor(private sExperiencia:SExperienciaService, 
              private router:Router,
              private formBuilder:FormBuilder) {
              
              this.form=this.formBuilder.group({
                empresa:['',[Validators.required]],
                fecha_inicio:['',[Validators.required]],
                fecha_fin:['',[Validators.required]],
                puesto:['',[Validators.required]],
                imagen:['',[Validators.required]],
              })
            }

  ngOnInit(): void {

  }

  get Empresa(){
    return this.form.get("empresa");
  }

  get Fecha_inicio(){
    return this.form.get("fecha_inicio");
  }

  get Fecha_fin(){
    return this.form.get("fecha_fin");
  }

  get Puesto(){
    return this.form.get("puesto");
  }

  get Imagen(){
    return this.form.get("imagen");
  }
  
  crearExperiencia():void{
    this.sExperiencia.crearExperiencia(this.form.value).subscribe(
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
      this.crearExperiencia();
      alert ("Experiencia creada");
      this.router.navigate(['']);
    }else{
      alert ("Falló la carga. Intente nuevamente.");
      this.form.markAllAsTouched();
    }

    }
}
