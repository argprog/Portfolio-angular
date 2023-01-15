import { Component, OnInit } from '@angular/core';
import { Habilidad } from 'src/app/entidades/habilidad';
import { Shabilidadeservice } from 'src/app/servicios/s-habilidad.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  habi: Habilidad[]=[];

  constructor(private sHabilidad:Shabilidadeservice, private tokenService: TokenService) { }

  isLogged= false;

  ngOnInit(): void {
    this.cargarHabilidad();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarHabilidad(): void {
    this.sHabilidad.lista().subscribe(data => {this.habi = data});
  }

  borrar(id: number){
      this.sHabilidad.borrarHabilidad(id).subscribe(
        data => {
          alert("No se pudo eliminar la Habilidad");
        }
        , err => {
         alert("Se eliminará el registro");
         this.cargarHabilidad();
       }
      )
  }
}
