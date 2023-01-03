import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../entidades/experiencia';


@Injectable({
  providedIn: 'root'
})
export class SExperienciaService {
  url="http://localhost:8080";


  constructor(private http:HttpClient) { }

  public lista():Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(this.url + '/experiencias/traer');
  }

  public detail(id:number):Observable<Experiencia>{
    return this.http.get<Experiencia>(this.url + `/experiencias/traer/${id}`);
  }
  public crearExperiencia(expe:Experiencia):Observable<any>{
    return this.http.post<any>(this.url + '/experiencias/crear',expe);
  }

  public editarExperiencia(expe:Experiencia):Observable<any>{
    return this.http.put<any>(this.url + '/experiencias/editar',expe);
  }

  public borrarExperiencia(id:number):Observable<any>{
    return this.http.delete<any>(this.url + `/experiencias/borrar/${id}`);
  }
}
