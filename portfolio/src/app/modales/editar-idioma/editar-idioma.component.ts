import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Idiomas } from 'src/app/entidades/idiomas';
import { SIdiomassService } from 'src/app/servicios/s-idiomas.service';

@Component({
  selector: 'app-editar-idioma',
  templateUrl: './editar-idioma.component.html',
  styleUrls: ['./editar-idioma.component.css']
})
export class EditarIdiomaComponent implements OnInit {

  form:FormGroup;
  idioma: Idiomas;

  constructor(
              private formBuilder:FormBuilder,
              private sidiomas:SIdiomassService,
              private activatedRoute: ActivatedRoute,
              private router:Router
  ) {
    this.form=this.formBuilder.group({
      id:[''],
      nombre:['',[Validators.required]],
      nivel:['',[Validators.required]],
      imagen:['',[Validators.required]],
    })
   }

  ngOnInit(): void {
    const id=this.activatedRoute.snapshot.params['id'];
    this.sidiomas.detail(id).subscribe(data=>{
      this.idioma=data;      
    },error=>{
    alert("Error en la carga de datos");
    this.router.navigate(['']);
    }
    )
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

  onUpdate():void{
    this.sidiomas.editarIdiomas(this.form.value).subscribe(data=>{
      console.log(this.form.value);
    })
  }

  onEnviar(event:Event){
    event.preventDefault;
    if (this.form.valid){
      this.onUpdate();
      alert ("Datos modificados");
      this.router.navigate(['']);
    }else{
      alert ("Falló la carga. Intente nuevamente.");
      this.form.markAllAsTouched();
    }

    }
}