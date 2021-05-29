import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { ICountriesData } from '../interfaces/getContries.interface'
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.scss']
})
export class ReservaComponent implements OnInit {
  columnas: string[] = ['fecha', 'nombre', 'correo', 'pais'];

  datos: Articulo[] = [
    new Articulo("22/12/2021", 'papas', "test@leaderfy.com", "méxico")
  ];
  articuloselect: Articulo = new Articulo("", "", "","");
  @ViewChild(MatTable)
  tabla1!: MatTable<Articulo>;
  reserva!: FormGroup;
  submitted = false;
  public countries: ICountriesData[] = [];

  constructor(private formBuilder: FormBuilder, private loginservice: LoginService) { }

  ngOnInit() { 
    // this.fechamanana();
  }

  agregar() {
    this.datos.push(new Articulo(this.articuloselect.fecha, this.articuloselect.nombre, this.articuloselect.correo, this.articuloselect.pais));
    this.tabla1.renderRows();
    this.articuloselect = new Articulo("", "", "","");
  }

  // fechamanana(){
  //   let hoy = new Date();
  //   let DIA_EN_MILISEGUNDOS = 24 * 60 * 60 * 1000;
  //   let manana = new Date(hoy.getTime() + DIA_EN_MILISEGUNDOS);
  //   return manana;
  // }
}


export class Articulo {
  constructor(public fecha: string, public nombre: string, public correo: string, public pais:string) {
  }

}
