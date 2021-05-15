import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  // {
  //   path:'',
  //   redirectTo: 'login',
  //   pathMatch: 'full'
  // },
  // { path: 'home', 
  // loadChildren: () => import('./home/home.component').then(m => m.HomeComponent) 
  // },
  // {
  //   path:'login',
  //   loadChildren:() => import('./login/login.component').then(m => m.LoginComponent) 
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
