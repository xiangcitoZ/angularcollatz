import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collatz',
  templateUrl: './collatz.component.html',
  styleUrls: ['./collatz.component.css']
})
export class CollatzComponent  {
  public numero!: number;
  public numeros: Array<number>;

    //CUIDADO CON EL ARRAY
    constructor(){
      this.numeros = new Array<number>();
      this.cargarCollatz();
  }

  cargarCollatz(): void{
    this.numero = Math.random()*10+1;

    this.numeros.push(this.numero);

  }

}
