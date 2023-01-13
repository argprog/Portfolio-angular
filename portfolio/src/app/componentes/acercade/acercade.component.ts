import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {
  miPortfolio:any;
  isLogged=false;
  roles: string[] = [];

  constructor(private datosPortfolio:PortfolioService, private autenticacionServicio:AutenticacionService, private tokenService:TokenService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDato(1).subscribe(data =>{
      this.miPortfolio=data;});
      if(this.tokenService.getToken()){
        this.isLogged = true;
        this.roles = this.tokenService.getAuthorities();
      }
  }
}
