import { Component, OnInit } from '@angular/core';
import {LoginService} from '../services/login.service'
import { Quote } from '../models/quote.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  // quote: Quote;
  // quote={

  // }
  quote!: Quote
  constructor(
    private loginservice:LoginService, 
    // public quote: Quote
  ) { }

  ngOnInit(): void {
  this.loginservice.cards().subscribe(quote => {
    this.quote = quote;
   console.log(quote)
  });
  }

}
