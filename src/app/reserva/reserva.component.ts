import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
interface Reserva {
  nombre: string,
  correo: string,
  fecha: Date,
  pais: string
}
interface Country {
  country: string,
  region: string
}


@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.scss']
})
export class ReservaComponent implements OnInit {
  formulario!: FormGroup;
  reservas: Array<Reserva> = new Array<Reserva>();
  countries: Array<Country> = new Array<Country>();
  min = "";
  max = "";

  constructor(
    private formBuilder: FormBuilder,
    private loginservice: LoginService
  ) {  }

  ngOnInit() {
    this.crearFormulario();
    this.fechamanana();
    this.oncemeses();
    this.fechaManana();
    this.listarpaises();
  }
  crearFormulario() {
    this.formulario = this.formBuilder.group({
      nombre: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
      correo: ['', Validators.compose([
        Validators.required,
        Validators.pattern('([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@(?:gmail|hotmail)([\.])(?:com)')
      ])],
      fecha: ['', Validators.required],
      pais:['', Validators.required]
    })
  }

  reservar() {
    this.reservas.push(this.formulario.value as Reserva);
    this.formulario.reset();
  }

  fechamanana() {
    let hoy = new Date();
    let DIA_EN_MILISEGUNDOS = 24 * 60 * 60 * 1000;
    let manana = new Date(hoy.getTime() + DIA_EN_MILISEGUNDOS);
    return manana.toLocaleDateString('en-GB');
  }

  listarpaises() {
    this.loginservice.paises().subscribe(res => {
        // console.log(res.data)
      var paises = [];
      // res.data
      for (const country in res.data) {
        // paises.push(`${region}: ${res.data[region]}`)
        // console.log(res.data[country])
        this.countries.push(res.data[country])
      }
      console.log(this.countries)
      // this.countries = res.data[0]['region']
      // res.data.length
      // console.log(res.data[0]['region'])

      //   var country = res.filter(function(country) {
      //     return country === "100";
      // });
      // var paises=[]
      //   for (let i = 0; i < 9; i++) {
      //       // newObjet.push(res.data)

      //   }
      // console.log(newObjet)
    })
  }

  oncemeses() {
    const fechaHoy = new Date();
    let dieciseis = 1000 * 60 * 60 * 24 * 330
    let resta = fechaHoy.getTime() - dieciseis
    let fechahace16 = new Date(resta)
    let dia = fechahace16.getDay();
    let mes = fechahace16.getMonth();
    let anio = fechahace16.getFullYear()
    var fecha = anio + '-' + '0' + mes + '-' + '0' + dia;
    this.min = fecha
  }
  diamanan() {
    const fechaHoy = new Date();
    let dieciseis = 1000 * 60 * 60 * 24
    let suma = fechaHoy.getTime() + dieciseis
    let fechamanana = new Date(suma)
    let dia = fechamanana.getDay();
    let mes = fechamanana.getMonth() + 1;
    let anio = fechamanana.getFullYear()
    var fecha = anio + '-' + '0' + mes + '-' + '0' + dia;
    this.max = fecha
  }

  fechaManana() {
    let hoy = new Date();
    let DIA_EN_MILISEGUNDOS = 24 * 60 * 60 * 1000;
    let manana = new Date(hoy.getTime() + DIA_EN_MILISEGUNDOS);
    var dia = manana.getDate() <= 10 ? '0' + manana.getDate() : manana.getDate();
    var mes = manana.getMonth() + 1;
    var anio = manana.getFullYear();
    var fechaManana = anio + '-' + '0' + mes + '-' + dia;
    this.max = fechaManana
    return fechaManana;
  }

}


