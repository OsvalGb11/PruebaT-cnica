import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
// import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HomeComponent} from './home/home.component';
import {BienvenidaComponent} from './bienvenida/bienvenida.component'
import {CardsComponent} from './cards/cards.component';
import { ReservaComponent } from './reserva/reserva.component';
import { LinksComponent } from './links/links.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    BienvenidaComponent,
    CardsComponent,
    ReservaComponent,
    LinksComponent
  ],
  imports: [
    FormsModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
