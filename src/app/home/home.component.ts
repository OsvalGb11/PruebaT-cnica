import { Component, OnInit } from '@angular/core';
import {LoginService} from '../services/login.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
public role:any;
// permisoA: boolean;
permisoB:boolean;
  constructor(
    private loginservice:LoginService, 
    private router:Router,
    // public role: any,
    ) { 
      this.role = localStorage.getItem('role');
      this.permisoB=false;
      // this.permisoA=false;
    }
  ngOnInit(): void {
    if(this.role ==='ROL-B'){
      console.log(this.role)
      this.permisoB = false;
    }else{
      this.permisoB = true;
    }
    // if(this.role==='ROL-A'){
    //   this.permisoA=false
    // }
    // const token = localStorage.getItem('token');
    // const rol = localStorage.getItem('role');
    // this.userCheckA();
    // this.userCheckb();
  }

  // userCheckA(){
  //   const rol = localStorage.getItem('role')
  //   if(rol==='ROL-A'){
  //     console.log('autorizado');
  //   }else{
  //     console.log('no autorizado')
  //   }
  // }
  
  // userCheckb(){
  //   const rol = localStorage.getItem('role')
  //   if(rol==='ROL-B'){
  //     console.log('autorizado');
  //   }else{
  //     console.log('no autorizado')
  //   }
  // }


  logout(){
    this.loginservice.logout();
    this.router.navigate(['./login'])
  }

  cards(){
    this.router.navigate(['./cards'])
  }

  reserva(){
    this.router.navigate(['./reserva'])
  }
  links(){
    this.router.navigate(['./links'])
  }
}
