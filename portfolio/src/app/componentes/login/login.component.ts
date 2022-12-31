import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
 export class LoginComponent implements OnInit {

  form:FormGroup;
  
  constructor(private formBuilder:FormBuilder, private autenticacionService:AutenticacionService, private ruta:Router) {
    this.form=this.formBuilder.group(
      {
        email:['', [Validators.required,Validators.email]],
        clave:['', [Validators.required,Validators.minLength(4)]],
      }
    )}
  
    ngOnInit(): void {
   }

   get Email()
   {
    return this.form.get('email');
   }

   get Clave()
   {
    return this.form.get('clave');
   }

   onEnviar(event:Event){
    event.preventDefault;
    this.autenticacionService.loginPersona(this.form.value).subscribe(data=>{
      console.log("DATA:" + JSON.stringify(data));
          })
          this.ruta.navigate(['/']);
          //window.location.reload();
   }
  }
 
