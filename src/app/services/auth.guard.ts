import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
  ) { }

  canActivate(): Observable<boolean> | boolean {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      this.router.navigate(['/login']);
    }
    return new Observable().pipe(map(() => false));
  }

}
