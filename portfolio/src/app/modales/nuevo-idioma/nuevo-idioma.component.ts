import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SIdiomassService } from 'src/app/servicios/s-idiomas.service';

@Component({
  selector: 'app-nuevo-idioma',
  templateUrl: './nuevo-idioma.component.html',
  styleUrls: ['./nuevo-idioma.component.css']
})
export class NuevoIdiomaComponent implements OnInit {
  form:FormGroup;

  constructor(private sIdiomas:SIdiomassService, 
              private router:Router,
              private formBuilder:FormBuilder) {
              
              this.form=this.formBuilder.group({
                nombre:['',[Validators.required]],
                nivel:['',[Validators.required]],
                imagen:['',[Validators.required]],
              })
            }

  ngOnInit(): void {

  }

  get Nombre(){
    return this.form.get("nombre");
  }

  get Nivel(){
    return this.form.get("nivel");
  }

  get Imagen(){
    return this.form.get("imagen");
  }

  crearIdiomas():void{
    this.sIdiomas.crearIdiomas(this.form.value).subscribe(
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
      this.crearIdiomas();
      alert ("Idioma creado");
      this.router.navigate(['']);
    }else{
      alert ("Falló la carga. Intente nuevamente.");
      this.form.markAllAsTouched();
    }

    }
}
