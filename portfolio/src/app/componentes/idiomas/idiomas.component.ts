import { Component, OnInit } from '@angular/core';
import { Idiomas } from 'src/app/entidades/idiomas';
import { SIdiomassService } from 'src/app/servicios/s-idiomas.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-idiomas',
  templateUrl: './idiomas.component.html',
  styleUrls: ['./idiomas.component.css']
})
export class IdiomasComponent implements OnInit {
idiom: Idiomas[]=[];

  constructor(private sIdiomas:SIdiomassService, private tokenService: TokenService) { }

  isLogged= false;

  ngOnInit(): void {
    this.cargarIdiomas();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarIdiomas(): void {
    this.sIdiomas.lista().subscribe(data => {this.idiom = data});
  }

  borrar(id: number){
      this.sIdiomas.borrarIdiomas(id).subscribe(
        data => {
          alert("No se pudo eliminar el idioma");
        }
        , err => {
         alert("Se eliminará el registro");
         this.cargarIdiomas();
       }
      )
  }
}

