import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/entidades/educacion';
import { SEducacionService } from 'src/app/servicios/s-educacion.service';

@Component({
  selector: 'app-editar-educacion',
  templateUrl: './editar-educacion.component.html',
  styleUrls: ['./editar-educacion.component.css']
})
export class EditarEducacionComponent implements OnInit {

  form:FormGroup;
  educacion: Educacion;

  constructor(
              private formBuilder:FormBuilder,
              private seducacion:SEducacionService,
              private activatedRoute: ActivatedRoute,
              private router:Router
  ) {
    this.form=this.formBuilder.group({
      id:[''],
      institucion:['',[Validators.required]],
      fecha:['',[Validators.required]],
      titulo:['',[Validators.required]],
     })
   }

  ngOnInit(): void {
    const id=this.activatedRoute.snapshot.params['id'];
    this.seducacion.detail(id).subscribe(data=>{
      this.educacion=data;      
    },error=>{
    alert("Error en la carga de datos");
    this.router.navigate(['']);
    }
    )
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

  onUpdate():void{
    this.seducacion.editarEducacion(this.form.value).subscribe(data=>{
      console.log(this.form.value);
    })
  }

  onEnviar(event:Event){
    event.preventDefault;
    if (this.form.valid){
      this.onUpdate();
      alert ("Moficado ok");
      this.router.navigate(['']);
    }else{
      alert ("Falló la carga. Intente nuevamente.");
      this.form.markAllAsTouched();
    }

    }
}