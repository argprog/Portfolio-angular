import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/entidades/experiencia';
import { SExperienciaService } from 'src/app/servicios/s-experiencia.service';

@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css']
})
export class EditarExperienciaComponent implements OnInit {
  form:FormGroup;
  experiencia: Experiencia;

  constructor(
              private formBuilder:FormBuilder,
              private sExperiencia:SExperienciaService,
              private activatedRoute: ActivatedRoute,
              private router:Router
  ) {
    this.form=this.formBuilder.group({
      id:[''],
      empresa:['',[Validators.required]],
      fecha_inicio:['',[Validators.required]],
      fecha_fin:['',[Validators.required]],
      puesto:['',[Validators.required]],
    })
   }

  ngOnInit(): void {
    const id=this.activatedRoute.snapshot.params['id'];
    this.sExperiencia.detail(id).subscribe(data=>{
      this.experiencia=data;      
    },error=>{
    alert("Error en la carga de datos");
    this.router.navigate(['']);
    }
    )
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

  onUpdate():void{
    this.sExperiencia.editarExperiencia(this.form.value).subscribe(data=>{
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







         







  



