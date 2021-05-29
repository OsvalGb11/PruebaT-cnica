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
    new Articulo("22/12/2021", 'papas', "test@leaderfy.com", "méxico"),
    // new Articulo(2, 'manzanas', 53),
    // new Articulo(3, 'naranjas', 25),
  ];
  articuloselect: Articulo = new Articulo("", "", "","");
  @ViewChild(MatTable)
  tabla1!: MatTable<Articulo>;
  // public newUser: FormGroup;
  // public newUser: FormGroup;
  reserva!: FormGroup;
  submitted = false;
  public countries: ICountriesData[] = [];

  constructor(private formBuilder: FormBuilder, private loginservice: LoginService) { }

  ngOnInit() { }

  // borrarFila(cod: number) {
  //   if (confirm("Realmente quiere borrarlo?")) {
  //     this.datos.splice(cod, 1);
  //     this.tabla1.renderRows();
  //   }
  // }

  agregar() {
    this.datos.push(new Articulo(this.articuloselect.fecha, this.articuloselect.nombre, this.articuloselect.correo, this.articuloselect.pais));
    this.tabla1.renderRows();
    this.articuloselect = new Articulo("", "", "","");
  }
}


export class Articulo {
  constructor(public fecha: string, public nombre: string, public correo: string, public pais:string) {
  }
  //     // this.loginservice.paises().subscribe((data: any) => {
  //     //   // let paises = [data.data[0].country]
  //     //   // console.log(data.data['region'])
  //     //   // let newArr =[{}]
  //     //   // for (let i = 0; i < data.data.length; i++) {
  //     //   //   newArr.push(data.data)
  //     //   // }
  //     //   // // this.countries = [data.data];
  //     //   // console.log(newArr)
  //     // });
  //     this.reserva = this.formBuilder.group({
  //       nya: ['', Validators.required],            
  //       email: ['', [Validators.required, Validators.email]],
  //       fecha: ['', Validators.required],
  //       pais: ['', [Validators.required, Validators.minLength(6)]]
  //   });
  //   }

  //   get f() { return this.reserva.controls; }

  //   onSubmit() {
  //     this.submitted = true;

  //     if (this.reserva.invalid) {
  //         return;
  //     }

  //     alert('Mensaje Enviado !')
  // }

}
