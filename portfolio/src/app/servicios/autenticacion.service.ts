import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
url="http://localhost:8080/autenticacion/login";
currentUserSubject:BehaviorSubject<any>;
sessionStorage:any;

  constructor(private http:HttpClient) { 
    console.log('El servicio de autenticación está corriendo');
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse
      (sessionStorage.getItem('currentUser')||'{}'))
    }
      loginPersona(credenciales:any):Observable<any>{
        var httpOptions={
          headers:new HttpHeaders({
            'Content-Type':'aplication/json'
          }),
        }
        return this.http.post<any>(this.url, credenciales, httpOptions).pipe(map(data=>{
          sessionStorage.setItem('currentUser', JSON.stringify(data));
          this.currentUserSubject.next(data);
          return data;
        }
          
          ))
      }
  
      get usuarioAutenticado()
      {
        return this.currentUserSubject.value;

      }
}