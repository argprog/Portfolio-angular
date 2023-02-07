import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../entidades/proyecto';

@Injectable({
  providedIn: 'root'
})
export class SProyectoService {

  url:string="https://portfolio-back-end-8ppg.onrender.com";

  constructor(private http:HttpClient) { }

  public lista():Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>(this.url + '/proyectos/traer');
  }

  public detail(id:number):Observable<Proyecto>{
    return this.http.get<Proyecto>(this.url + `/proyectos/traer/${id}`);
  }
  public crearProyecto(proye:Proyecto):Observable<any>{
    return this.http.post<any>(this.url + '/proyectos/crear',proye);
  }

  public editarProyecto(proye:Proyecto):Observable<any>{
    return this.http.put<any>(this.url + '/proyectos/editar',proye);
  }

  public borrarProyecto(id:number):Observable<any>{
    return this.http.delete<any>(this.url + `/proyectos/borrar/${id}`);
  }
}
