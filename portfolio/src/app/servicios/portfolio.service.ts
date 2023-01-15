import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../entidades/persona';

@Injectable({
  providedIn: 'root'
})

export class PortfolioService {
url:string="http://localhost:8080";
  
  constructor(private http:HttpClient) { }

  public obtenerDatos():Observable<any>{
    return this.http.get<any>(this.url + '/personas/traer');
  }

  public obtenerDato(id:number):Observable<any>{
    return this.http.get<any>(this.url + `/personas/traer/${id}`);
  }

  public editarPersona(perso:Persona):Observable<any>{
    return this.http.put<any>(this.url + '/personas/editar', perso);
  }

}
