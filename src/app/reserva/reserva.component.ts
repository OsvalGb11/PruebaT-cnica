import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
interface Reserva{
  nombre: string,
  correo:string,
  fecha: Date
}
interface Country{
  country: string,
  region:string
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
  maximDia:string;

  constructor(
    private formBuilder: FormBuilder,
    private loginservice: LoginService
    ) {
    this.maximDia = this.fechamanana();
    this.maximDia.trim()
   }

  ngOnInit() { 
    this.crearFormulario();
    this.fechamanana();
    this.listarpaises();
    // console.log('Dia maximo: '+this.maximDia.toLocaleDateString());
  }
  crearFormulario(){
    this.formulario=this.formBuilder.group({
      nombre:['',Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
      correo:['', Validators.compose([
        Validators.required,
        Validators.pattern('([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@(?:gmail|hotmail)([\.])(?:com)')
      ])],
      fecha:['',Validators.required],
      // pais:['',Validators.required]
    })
  }

  reservar(){
    this.reservas.push(this.formulario.value as Reserva);
    this.formulario.reset();
  }

  fechamanana(){
    let hoy = new Date();
    let DIA_EN_MILISEGUNDOS = 24 * 60 * 60 * 1000;
    let manana = new Date(hoy.getTime() + DIA_EN_MILISEGUNDOS);
    // console.log(manana.toLocaleDateString('en-GB',))
    return manana.toLocaleDateString('en-GB');
  }




  listarpaises(){
    this.loginservice.paises().subscribe(res=>{
      // this.countries.push()
      console.log(res.data)
    })
  }
  
}


