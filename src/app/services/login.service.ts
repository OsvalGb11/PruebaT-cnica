import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment'
import {HttpClient} from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { User, UserResponse } from '../models/user.model';
import {catchError, map} from 'rxjs/operators'
import {Md5} from 'ts-md5/dist/md5';
import { Quote } from '../models/quote.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  quoteURL: string = 'https://www.breakingbadapi.com/api/quotes';  
  constructor(private http:HttpClient) { }

  login(data:User): Observable<UserResponse | void> {
    return this.http.post<UserResponse>(`${environment.apiUrl}`, data).pipe(map((res:UserResponse)=>{
      let hashCode=Md5.hashAsciiStr(res.code)
      this.saveCode(hashCode.toString())
      localStorage.setItem('role', res.rol);
      return res
    }),
    catchError((err)=> this.handleError(err))
    )
  }

  logout():void{
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  }
  private saveCode(code:string):void{
    localStorage.setItem('token', code)
  }
  private handleError(err: { message: any; }): Observable<never>{
    let errorMessage = 'Ocurrió un error';
    if (err){
      errorMessage= `Error, credenciales no válidas code: ${err.message}`
    }
    window.alert(errorMessage);
    return throwError(errorMessage)
  }
  cards(): Observable<Quote> {
    return this.http.get<Quote>(this.quoteURL);
  }

  
}
