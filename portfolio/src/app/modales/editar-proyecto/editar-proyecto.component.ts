import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/entidades/proyecto';
import { SProyectoService } from 'src/app/servicios/s-proyecto.service';

@Component({
  selector: 'app-editar-proyecto',
  templateUrl: './editar-proyecto.component.html',
  styleUrls: ['./editar-proyecto.component.css']
})
export class EditarProyectoComponent implements OnInit {
  form:FormGroup;
  proyecto: Proyecto;

  constructor(
              private formBuilder:FormBuilder,
              private sproyecto:SProyectoService,
              private activatedRoute: ActivatedRoute,
              private router:Router
  ) {
    this.form=this.formBuilder.group({
      id:[''],
      institucion:['',[Validators.required]],
      fecha:['',[Validators.required]],
      nombre:['',[Validators.required]],
     })
   }

  ngOnInit(): void {
    const id=this.activatedRoute.snapshot.params['id'];
    this.sproyecto.detail(id).subscribe(data=>{
      this.proyecto=data;      
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
  get Nombre(){
    return this.form.get("nombre");
  }

  onUpdate():void{
    this.sproyecto.editarProyecto(this.form.value).subscribe(data=>{
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