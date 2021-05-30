import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.scss']
})
export class BienvenidaComponent implements OnInit {
  public role:any;
  constructor() { }

  ngOnInit(): void {
    this.role=localStorage.getItem('role');
  }
  

}
