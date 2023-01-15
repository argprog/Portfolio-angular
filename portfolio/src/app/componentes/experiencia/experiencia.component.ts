import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/entidades/experiencia';
import { SExperienciaService } from 'src/app/servicios/s-experiencia.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  expe: Experiencia[]=[];
  isLogged: boolean = false;

  constructor(private sExperiencia:SExperienciaService, private tokenService:TokenService) { }

  ngOnInit(): void {
    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarExperiencia(): void {
    this.sExperiencia.lista().subscribe(data => {this.expe = data});
  }

  borrar(id: number){
      this.sExperiencia.borrarExperiencia(id).subscribe(
        data => {
          alert("No se pudo eliminar la experiencia");
        }
        , err => {
         alert("Se eliminará la experiencia");
         this.cargarExperiencia();
       }
      )
  }
}
