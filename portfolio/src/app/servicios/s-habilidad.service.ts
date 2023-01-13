import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidad } from '../entidades/habilidad';

@Injectable({
  providedIn: 'root'
})
export class Shabilidadeservice {
  url="http://localhost:8080";


  constructor(private http:HttpClient) { }

  public lista():Observable<Habilidad[]>{
    return this.http.get<Habilidad[]>(this.url + '/habilidades/traer');
  }

  public detail(id:number):Observable<Habilidad>{
    return this.http.get<Habilidad>(this.url + `/habilidades/traer/${id}`);
  }
  public crearHabilidad(habi:Habilidad):Observable<any>{
    return this.http.post<any>(this.url + '/habilidades/crear',habi);
  }

  public editarHabilidad(habi:Habilidad):Observable<any>{
    return this.http.put<any>(this.url + '/habilidades/editar',habi);
  }

  public borrarHabilidad(id:number):Observable<any>{
    return this.http.delete<any>(this.url + `/habilidades/borrar/${id}`);
  }
}
