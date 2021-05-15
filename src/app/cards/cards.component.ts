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
  // public quote: Quote;
  constructor(
    private loginservice:LoginService
  ) { }

  ngOnInit(): void {
  this.loginservice.cards().subscribe((d: any) => {
    // this.quote = d;
   console.log(d)
  });
  }

}
