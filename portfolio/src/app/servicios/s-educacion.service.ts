import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../entidades/educacion';

@Injectable({
  providedIn: 'root'
})
export class SEducacionService {
url:string="https://portfolio-back-end-8ppg.onrender.com";

  constructor(private http:HttpClient) { }

  public lista():Observable<Educacion[]>{
    return this.http.get<Educacion[]>(this.url + '/educacion/traer');
  }

  public detail(id:number):Observable<Educacion>{
    return this.http.get<Educacion>(this.url + `/educacion/traer/${id}`);
  }
  public crearEducacion(edu:Educacion):Observable<any>{
    return this.http.post<any>(this.url + '/educacion/crear',edu);
  }

  public editarEducacion(edu:Educacion):Observable<any>{
    return this.http.put<any>(this.url + '/educacion/editar',edu);
  }

  public borrarEducacion(id:number):Observable<any>{
    return this.http.delete<any>(this.url + `/educacion/borrar/${id}`);
  }
}
