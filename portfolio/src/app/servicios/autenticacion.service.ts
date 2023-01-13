import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from '../entidades/jwt-dto';
import { LoginUsuario } from '../entidades/login-usuario';
import { NuevoUsuario } from '../entidades/nuevo-usuario';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
url="http://localhost:8080/auth/";

constructor(private http: HttpClient) {}  

public nuevo(nuevoUsuario: NuevoUsuario): Observable<any>{
  return this.http.post<any>(this.url + 'nuevo', nuevoUsuario);
}

public login(loginUsuario: LoginUsuario): Observable<JwtDto>{
  return this.http.post<JwtDto>(this.url + 'login', loginUsuario);
}
}
