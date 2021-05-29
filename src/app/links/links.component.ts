import { Component, OnInit } from '@angular/core';
import { urlShortService } from '../services/short.service';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {
  nombreUrl: string;
  urlShort: string;
  urlOriginal:string;
  urlProcesada: boolean;
  enlaces:Link[]=[];
  fecha:Date;
  loading: boolean;
  mostrarError:boolean;
  textError:string;
  constructor(
    private _urlShortService:urlShortService
  ) { 
    this.nombreUrl = '';
    this.urlShort = '';
    this.urlOriginal = '';
    this.urlProcesada = false;
    this.fecha= new Date();
    this.loading=false;
    this.mostrarError=false;
    this.textError='';
  }

  ngOnInit(): void {
  }

  procesar(){
    if (this.nombreUrl === '') {
      this.error('Por favor, ingrese una URL');
      return
    }
    this.loading=true;
    this._urlShortService.geturlShort(this.nombreUrl).subscribe(res=>{
      this.loading=false;
      this.urlOriginal = res.result.original_link;
      this.urlShort= res.result.full_short_link;
      this.enlaces.push(new Link(this.urlOriginal,this.urlShort,this.fecha))
      this.enlaces.reverse();
      this.nombreUrl = '';

    }, error=>{
      this.loading = false;
      this.nombreUrl = '';
      if(error.error.error === 'This is not a valid URL, for more infos see shrtco.de/docs'){
        this.error('La URL que ingresaste no es válida');
      }
    })
  }


  error(valor:string){
    this.mostrarError = true;
    this.textError = valor;
    setTimeout(()=>{
      this.mostrarError=false;
    },4000)
  }
}

export class Link {
  constructor(public ori: string, public short: string, public date: Date) {
  }

}

