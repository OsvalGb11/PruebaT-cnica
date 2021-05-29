import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservaComponent } from './reserva/reserva.component'
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { CardsComponent } from './cards/cards.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LinksComponent } from './links/links.component'
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'bienvenida',
    component: BienvenidaComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'cards',
    component: CardsComponent
  },
  {
    path:'reserva',
    component: ReservaComponent
  },
  {
    path:'links',
    component: LinksComponent
  },
  {
    path: '**',
    redirectTo: 'login',
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
