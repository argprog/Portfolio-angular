import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-header, app-login',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 isLogged= false;

    constructor(private autenticacionServicio:AutenticacionService, private router:Router, private tokenService:TokenService) { }

  ngOnInit(): void {
  if(this.tokenService.getToken()){
    this.isLogged=true;
  }else{
    this.isLogged=false;
  }
  }

  onLogOut(): void {
    this.tokenService.logOut();
      window.location.reload();
    }
  }
