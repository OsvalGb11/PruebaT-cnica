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
  constructor(
    private loginservice:LoginService, 
    private router:Router,
    // public role: any,
    ) { 
      this.role = localStorage.getItem('role')
    }
  ngOnInit(): void {
    // const token = localStorage.getItem('token');
    // const rol = localStorage.getItem('role');
    this.userCheck();
  }

  userCheck(){
    const token = localStorage.getItem('token');
    const rol = localStorage.getItem('role');

    if(token){
      this.role = localStorage.getItem('role');
      console.log(this.role)
    }
  }


  logout(){
    this.loginservice.logout();
    this.router.navigate(['./login'])
  }

  cards(){
    this.router.navigate(['./cards'])
  }
}
