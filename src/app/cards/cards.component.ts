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
  public id = 1;
  total = 0;

  constructor(
    private loginservice: LoginService
  ) {
  }
  ngOnInit(): void {
    this.loginservice.cards().subscribe(res => {
      // console.log(res)
      this.total = res.length;
      console.log(this.total)
      this.quotes = res;
    })
    // this.loginservice.quotesbyId(this.id).subscribe(res =>{
    //   console.log(res);
    //   this.quotes=res
    // })
  }

  next(){
    alert('hola');
    
  }
}
