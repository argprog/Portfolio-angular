import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidad } from 'src/app/entidades/habilidad';
import { Shabilidadeservice } from 'src/app/servicios/s-habilidad.service';

@Component({
  selector: 'app-editar-habilidad',
  templateUrl: './editar-habilidad.component.html',
  styleUrls: ['./editar-habilidad.component.css']
})
export class EditarHabilidadComponent implements OnInit {

  form:FormGroup;
  habilidad: Habilidad;

  constructor(
              private formBuilder:FormBuilder,
              private sHabilidad:Shabilidadeservice,
              private activatedRoute: ActivatedRoute,
              private router:Router
  ) {
    this.form=this.formBuilder.group({
      id:[''],
      nombre:['',[Validators.required]],
      porcentaje:['',[Validators.required]],
    })
   }

  ngOnInit(): void {
    const id=this.activatedRoute.snapshot.params['id'];
    this.sHabilidad.detail(id).subscribe(data=>{
      this.habilidad=data;      
    },error=>{
    alert("Error en la carga de datos");
    this.router.navigate(['']);
    }
    )
  }
  get Nombre(){
    return this.form.get("nombre");
  }
  get Porcentaje(){
    return this.form.get("porcentaje");
  }

  onUpdate():void{
    this.sHabilidad.editarHabilidad(this.form.value).subscribe(data=>{
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
