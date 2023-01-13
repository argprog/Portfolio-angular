import { Component, OnInit } from '@angular/core';
import { Habilidad } from 'src/app/entidades/habilidad';
import { Shabilidadeservice } from 'src/app/servicios/s-habilidad.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  habi: Habilidad[]=[];

  constructor(private sHabilidad:Shabilidadeservice) { }

  isLogged= false;

  ngOnInit(): void {

    this.sHabilidad.lista().subscribe(data => {this.habi = data});

  // this.cargarHabilidad();
  //   if (this.autenticacionService.usuarioAutenticado()) {
  //     this.isLogged = true;
  //   } else {
  //     this.isLogged = false;
  //   }
  }

  cargarHabilidad(): void {
    this.sHabilidad.lista().subscribe(data => {this.habi = data});
  }

  //por tema de versiones lo tuve que hacer de este modo
  borrar(id: number){
    // if(id != undefined){
      this.sHabilidad.borrarHabilidad(id).subscribe(
        data => {
          alert("No se pudo eliminar la Habilidad");
        }
        , err => {
         alert("Habilidad eliminada");
         this.cargarHabilidad();
       }
      )
    // }
  }
}
