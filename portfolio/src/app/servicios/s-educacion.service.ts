import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../entidades/educacion';

@Injectable({
  providedIn: 'root'
})
export class SEducacionService {
url="http://localhost:8080";

  constructor(private http:HttpClient) { }

  public lista():Observable<Educacion[]>{
    return this.http.get<Educacion[]>(this.url + '/educacion/traer');
  }

  public detail(id:number):Observable<Educacion>{
    return this.http.get<Educacion>(this.url + `/educacion/traer/${id}`);
  }
  public crearEducacion(expe:Educacion):Observable<any>{
    return this.http.post<any>(this.url + '/educacion/crear',Educacion);
  }

  public editarEducacion(expe:Educacion):Observable<any>{
    return this.http.put<any>(this.url + '/educacions/editar', Educacion);
  }

  public borrarEducacion(id:number):Observable<any>{
    return this.http.delete<any>(this.url + `educacions/borrar/${id}`);
  }
}
