import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/entidades/proyecto';
import { SProyectoService } from 'src/app/servicios/s-proyecto.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  proye: Proyecto[]=[];

  constructor(private sProyecto:SProyectoService, private tokenService:TokenService) { }

  isLogged= false;

  ngOnInit(): void {
    this.cargarProyecto();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarProyecto(): void {
    this.sProyecto.lista().subscribe(data => {this.proye = data});
  }

  borrar(id: number){
      this.sProyecto.borrarProyecto(id).subscribe(
        data => {
          alert("No se pudo eliminar el Proyecto");
        }
        , err => {
         alert("Se eliminará el registro");
         this.cargarProyecto();
       }
      )
  }
}

