import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor() { }

  model: Cliente = new Cliente();

  ngOnInit(): void {
  }

  onConfirmar(){
    console.log(this.model);
  }

}
