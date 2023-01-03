import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Idiomas } from '../entidades/idiomas';

@Injectable({
  providedIn: 'root'
})
export class SIdiomassService {
  url="http://localhost:8080";

  constructor(private http:HttpClient) { }

  public lista():Observable<Idiomas[]>{
    return this.http.get<Idiomas[]>(this.url + '/idiomas/traer');
  }

  public detail(id:number):Observable<Idiomas>{
    return this.http.get<Idiomas>(this.url + `/idiomas/traer/${id}`);
  }
  public crearIdiomas(expe:Idiomas):Observable<any>{
    return this.http.post<any>(this.url + '/idiomas/crear',Idiomas);
  }

  public editarIdiomas(expe:Idiomas):Observable<any>{
    return this.http.put<any>(this.url + '/idiomas/editar', Idiomas);
  }

  public borrarIdiomas(id:number):Observable<any>{
    return this.http.delete<any>(this.url + `idiomas/borrar/${id}`);
  }
}
