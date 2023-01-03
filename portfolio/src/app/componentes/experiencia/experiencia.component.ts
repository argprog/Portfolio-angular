import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/entidades/experiencia';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { SExperienciaService } from 'src/app/servicios/s-experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  expe: Experiencia[]=[];

  constructor(private sExperiencia:SExperienciaService, private autenticacionService:AutenticacionService) { }

  isLogged= false;

  ngOnInit(): void {

    this.sExperiencia.lista().subscribe(data => {this.expe = data});

  // this.cargarExperiencia();
  //   if (this.autenticacionService.usuarioAutenticado()) {
  //     this.isLogged = true;
  //   } else {
  //     this.isLogged = false;
  //   }
  }

  cargarExperiencia(): void {
    this.sExperiencia.lista().subscribe(data => {this.expe = data});
  }

  //por tema de versiones lo tuve que hacer de este modo
  borrar(id: number){
    // if(id != undefined){
      this.sExperiencia.borrarExperiencia(id).subscribe(
        data => {
          alert("No se pudo eliminar la experiencia");
        }
        , err => {
         alert("Experiencia eliminada");
         this.cargarExperiencia();
       }
      )
    // }
  }
}
