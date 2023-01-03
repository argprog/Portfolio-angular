import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/entidades/educacion';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { SEducacionService } from 'src/app/servicios/s-educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  edu: Educacion[]=[];

  constructor(private sEducacion:SEducacionService, private autenticacionService:AutenticacionService) { }

  isLogged= false;

  ngOnInit(): void {

    this.sEducacion.lista().subscribe(data => {this.edu = data});

  // this.cargarEducacion();
  //   if (this.autenticacionService.usuarioAutenticado()) {
  //     this.isLogged = true;
  //   } else {
  //     this.isLogged = false;
  //   }
  }

  cargarEducacion(): void {
    this.sEducacion.lista().subscribe(data => {this.edu = data});
  }

  //por tema de versiones lo tuve que hacer de este modo
  borrar(id: number){
    // if(id != undefined){
      this.sEducacion.borrarEducacion(id).subscribe(
        data => {
          alert("No se pudo eliminar la Educacion");
        }
        , err => {
         alert("Educacion eliminada");
         this.cargarEducacion();
       }
      )
    // }
  }
}
