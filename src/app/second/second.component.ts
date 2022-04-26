import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor() { }

  exibirTexto: boolean = false;
  textoBotao2: String = "Esconder Tabela"
  esconderTabela:boolean = true;

  modelo = [
    {
    "title": "Brown eggs",
    "type": "dairy",
    "description": "Raw organic brown eggs in a basket",
    "height": 600,
    "width": 400,
    "price": 28.1,
    "rating": 4,
    "comprar": "sim"
  }, 
  {
    "title": "Sweet fresh stawberry",
    "type": "fruit",
    "description": "Sweet fresh stawberry on the wooden table",
    "height": 450,
    "width": 299,
    "price": 29.45,
    "rating": 4,
    "comprar": "sim"
  }, 
  {
    "title": "Asparagus",
    "type": "vegetable",
    "description": "Asparagus with ham on the wooden table",
    "height": 450,
    "width": 299,
    "price": 18.95,
    "rating": 3,
    "comprar": "sim"
  }, 
  {
    "title": "Green smoothie",
    "type": "dairy",
    "description": "Glass of green smoothie with quail egg's yolk, served with cocktail tube, green apple and baby spinach leaves over tin surface.",
    "height": 600,
    "width": 399,
    "price": 17.68,
    "rating": 4,
    "comprar": "sim"
  }, 
  {
    "title": "Raw legums",
    "type": "vegetable",
    "description": "Raw legums on the wooden table",
    "height": 450,
    "width": 299,
    "price": 17.11,
    "rating": 2,
    "comprar": "sim"
  }, 
  {
    "title": "Baking cake",
    "type": "dairy",
    "description": "Baking cake in rural kitchen - dough  recipe ingredients (eggs, flour, sugar) on vintage wooden table from above.",
    "height": 450,
    "width": 675,
    "price": 11.14,
    "rating": 4,
    "comprar": "sim"
  }, 
  {
    "title": "Pesto with basil",
    "type": "vegetable",
    "description": "Italian traditional pesto with basil, chesse and oil",
    "height": 450,
    "width": 299,
    "price": 18.19,
    "rating": 2,
    "comprar": "sim"
  }, 
  {
    "title": "Hazelnut in black ceramic bowl",
    "type": "vegetable",
    "description": "Hazelnut in black ceramic bowl on old wooden background. forest wealth. rustic style. selective focus",
    "height": 450,
    "width": 301,
    "price": 27.35,
    "rating": 0,
    "comprar": "sim"
  }]

  ngOnInit(): void {
  }

  mostrarOcultar(){
    
    // this.exibirTexto=!this.exibirTexto
  }
  exibirTabela(){
    if (this.esconderTabela == true) {
      this.esconderTabela = false;
      this.textoBotao2 = "Abrir Tabela"
    }
    else {
      this.esconderTabela = true;
      this.textoBotao2 = "Esconder Tabela"
    }

    // this.esconderTabela = !this.esconderTabela;
  }
}
