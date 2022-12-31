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
    return this.http.get<any>(this.url + "/personas/traer");
  }

  public editarPersona(perso:Persona):Observable<any>{
    return this.http.put<any>(this.url + "/personas/editar",perso);
  }
  //crear un servicio por cada entidad

  //en acerca de va solo obtener y modificar

  //editaracercadts  crear form builder, inyectar constructor, router y activate route si

  //crear validaciones

  //inyectar servicio para mostrar datos y llamar mètodo para modificar persona. pasarle campos del HTML

//en html encerrar todo en form con ng submit al evento
}
