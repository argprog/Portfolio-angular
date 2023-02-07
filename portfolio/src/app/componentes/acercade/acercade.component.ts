import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/entidades/persona';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {

  persona: Persona;
  isLogged:boolean=false;
  constructor(public portfolioService: PortfolioService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.cargarPersona();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }
  
  cargarPersona():void{
    this.portfolioService.ver(7).subscribe(data => 
      {this.persona=data});
  }
}
