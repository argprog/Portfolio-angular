import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/entidades/proyecto';
import { SProyectoService } from 'src/app/servicios/s-proyecto.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  proye: Proyecto[]=[];

  constructor(private sProyecto:SProyectoService) { }

  isLogged= false;

  ngOnInit(): void {

    this.sProyecto.lista().subscribe(data => {this.proye = data});
  }

  cargarProyecto(): void {
    this.sProyecto.lista().subscribe(data => {this.proye = data});
  }

  //por tema de versiones lo tuve que hacer de este modo
  borrar(id: number){
    // if(id != undefined){
      this.sProyecto.borrarProyecto(id).subscribe(
        data => {
          alert("No se pudo eliminar el Proyecto");
        }
        , err => {
         alert("Proyecto eliminado");
         this.cargarProyecto();
       }
      )
    // }
  }
}

