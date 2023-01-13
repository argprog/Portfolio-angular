import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Shabilidadeservice } from 'src/app/servicios/s-habilidad.service';

@Component({
  selector: 'app-nueva-habilidad',
  templateUrl: './nueva-habilidad.component.html',
  styleUrls: ['./nueva-habilidad.component.css']
})
export class NuevaHabilidadComponent implements OnInit {
  form:FormGroup;

  constructor(private sHabilidad:Shabilidadeservice, 
              private router:Router,
              private formBuilder:FormBuilder) {
              
              this.form=this.formBuilder.group({
                nombre:['',[Validators.required]],
                porcentaje:['',[Validators.required]],
              })
            }

  ngOnInit(): void {

  }

  get Nombre(){
    return this.form.get("nombre");
  }

  get Porcentaje(){
    return this.form.get("porcentaje");
  }

  crearHabilidad():void{
    this.sHabilidad.crearHabilidad(this.form.value).subscribe(
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
      this.crearHabilidad();
      alert ("Habilidad creada");
      this.router.navigate(['']);
    }else{
      alert ("Falló la carga. Intente nuevamente.");
      this.form.markAllAsTouched();
    }

    }
}