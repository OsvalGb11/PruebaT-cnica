import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service'
import { Quote } from '../models/quote.model';
import { QuoteData } from '../models/quoteResponse.model'


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  public quotes: Quote[] = [];
  public id:number;
  public n: number=1;
  vacio:boolean;

  constructor(
    private loginservice: LoginService
  ) {
    this.id = 1;
    this.vacio=false;
  }
  ngOnInit(): void {
    this.quoetebyId(this.id);

  }
  
  next(){
    this.n +=1
    this.quoetebyId(this.n);
    this.vacio = false;
    if(this.n >= 31 || this.n ==62){
      this.vacio = true;
      if(this.n>=63){
        this.vacio=false
      }
    }
    
  }
  prev(){
    this.n -=1
    this.quoetebyId(this.n);
    if(this.n < 1){
      this.vacio = true;
      this.quoetebyId(1);
    }
    if(this.n >= 31 || this.n ==62){
      if(this.n<=30){
        this.vacio=false
      }
    }
  }
  quoetebyId(id:number){
    this.loginservice.quotesbyId(id).subscribe(res=>{
      this.quotes = res
      return this.quotes
    })
  }

  totalquotes(){
    this.loginservice.caragaQuotes().subscribe(res=>{
      console.log(res.length);
      return res.length
    })
  }
}
