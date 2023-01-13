import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../entidades/proyecto';

@Injectable({
  providedIn: 'root'
})
export class SProyectoService {

  url="http://localhost:8080";

  constructor(private http:HttpClient) { }

  public lista():Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>(this.url + '/proyectos/traer');
  }

  public detail(id:number):Observable<Proyecto>{
    return this.http.get<Proyecto>(this.url + `/proyectos/traer/${id}`);
  }
  public crearProyecto(habi:Proyecto):Observable<any>{
    return this.http.post<any>(this.url + '/proyectos/crear',habi);
  }

  public editarProyecto(habi:Proyecto):Observable<any>{
    return this.http.put<any>(this.url + '/proyectos/editar',habi);
  }

  public borrarProyecto(id:number):Observable<any>{
    return this.http.delete<any>(this.url + `/proyectos/borrar/${id}`);
  }
}
