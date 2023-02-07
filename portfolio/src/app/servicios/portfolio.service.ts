import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../entidades/persona';

@Injectable({
  providedIn: 'root'
})

export class PortfolioService {
url:string="https://portfolio-back-end-8ppg.onrender.com";
  
constructor(private httpClient: HttpClient) { }
  
  public lista(): Observable<Persona[]>{
    return this.httpClient.get<Persona[]>(this.url + '/personas/traer');
  }

  public ver(id: number):Observable<Persona>{
  return this.httpClient.get<Persona>(this.url + `/personas/traer/${id}`);
  }

  public editar(perso: Persona):Observable<any>{
    return this.httpClient.put<any>(this.url + '/personas/editar', perso);
    }
}