import { Component, OnInit } from '@angular/core';
import { Idiomas } from 'src/app/entidades/idiomas';
import { SIdiomassService } from 'src/app/servicios/s-idiomas.service';

@Component({
  selector: 'app-idiomas',
  templateUrl: './idiomas.component.html',
  styleUrls: ['./idiomas.component.css']
})
export class IdiomasComponent implements OnInit {
idiom: Idiomas[]=[];

  constructor(private sIdiomas:SIdiomassService) { }

  isLogged= false;

  ngOnInit(): void {

    this.sIdiomas.lista().subscribe(data => {this.idiom = data});

  // this.cargarIdiomas();
  //   if (this.autenticacionService.usuarioAutenticado()) {
  //     this.isLogged = true;
  //   } else {
  //     this.isLogged = false;
  //   }
  }

  cargarIdiomas(): void {
    this.sIdiomas.lista().subscribe(data => {this.idiom = data});
  }

  borrarIdiomas(id?: number){
    if(id != undefined){
      this.sIdiomas.borrarIdiomas(id).subscribe(
        data => {
          this.cargarIdiomas();
        }, err => {
          alert("No se pudo borrar el idioma");
        }
      )
    }
  }
}

