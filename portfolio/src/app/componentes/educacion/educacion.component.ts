import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/entidades/educacion';
import { SEducacionService } from 'src/app/servicios/s-educacion.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  edu: Educacion[]=[];

  constructor(private sEducacion:SEducacionService, private tokenService: TokenService) { }

  isLogged= false;

  ngOnInit(): void {
    this.cargarEducacion();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarEducacion(): void {
    this.sEducacion.lista().subscribe(data => {this.edu = data});
  }

  borrar(id: number){
      this.sEducacion.borrarEducacion(id).subscribe(
        data => {
          alert("No se pudo eliminar la Educacion");
        }
        , err => {
         alert("Se eliminará el registro");
         this.cargarEducacion();
       }
      )
  }
}
