import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/entidades/persona';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-editar-acercade',
  templateUrl: './editar-acercade.component.html',
  styleUrls: ['./editar-acercade.component.css']
})
export class EditarAcercadeComponent implements OnInit {

form:FormGroup;
persona: Persona;
isLogged=false

  constructor(private formBuilder:FormBuilder,
              private miPortfolio:PortfolioService,
              private activatedRoute: ActivatedRoute,
              private router:Router,
              private tokenService: TokenService) { 

                this.form=this.formBuilder.group({
                  id:[''],
                  nombre:['',[Validators.required]],
                  apellido:['',[Validators.required]],
                  certificacion:['',[Validators.required]],
                  profesion:['',[Validators.required]],
                  correo_electronico:['',[Validators.required]],
                  telefono:['',[Validators.required]],
                })
              }

  ngOnInit(): void {
    const id=this.activatedRoute.snapshot.params['id'];
    this.miPortfolio.obtenerDato(id).subscribe(data=>{
      this.persona=data;
      
    },error=>{
    alert("Error en la carga de datos");
    this.router.navigate(['']);
    }
    )
  }

  get Nombre(){
    return this.form.get("nombre");
  }
  get Apellido(){
    return this.form.get("apellido");
  }
  get Certificacion(){
    return this.form.get("certificacion");
  }
  get Profesion(){
    return this.form.get("profesion");
  }
  get Correo_electronico(){
    return this.form.get("correo_electronico");
  }
  get Telefono(){
    return this.form.get("telefono");
  }

  onUpdate():void{
    this.miPortfolio.editarPersona(this.form.value).subscribe(data=>{
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
  


