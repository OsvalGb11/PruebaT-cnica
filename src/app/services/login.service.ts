import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment'
import {HttpClient} from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { User, UserResponse } from '../models/user.model';
import {catchError, map} from 'rxjs/operators'
import {Md5} from 'ts-md5/dist/md5';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  login(data:User): Observable<UserResponse | void> {
    return this.http.post<UserResponse>(`${environment.apiUrl}`, data).pipe(map((res:UserResponse)=>{
      // console.log('res ->', res);
      let hashCode=Md5.hashAsciiStr(res.code)
      this.saveCode(hashCode.toString())
      return res
    }),
    catchError((err)=> this.handleError(err))
    )
  }

  logout():void{
    localStorage.removeItem('token');
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
}
