import { Component, OnInit } from '@angular/core';
import {LoginService} from '../services/login.service'
import {FormBuilder} from '@angular/forms'
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    rol:[''],
    password: ['']
  })
  constructor( 
    private loginservice:LoginService, 
    private fb: FormBuilder,
    private router:Router
    ) { }

  ngOnInit(): void {  }

  onLogin(){
    const formValue = this.loginForm.value;
    this.loginservice.login(formValue).subscribe(res =>{
      if(res){
        window.alert('Bienvenido')
        // this.router.navigate(['./home'])
      }else{
        window.alert('Error en las credenciales')
      }
    })
  }

}
