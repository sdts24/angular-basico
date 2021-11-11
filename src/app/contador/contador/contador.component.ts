import {Component} from '@angular/core';


@Component({
    selector: 'app-contador',
    template: `       
        <h1>{{titulo}}</h1> 
        <h1> La Base es: <strong>{{base}}</strong></h1>
    
        <button (click)="acumular(base)" > + {{base}} </button>
        <span>{{numero}}</span>
        <button (click)=" acumular(-base)"> - {{base}} </button>
        <button (click)="numero = 1"> Reset </button>  `
    })
export class ContadorComponent {
    titulo: string = 'Contador App';
    numero: number = 1
    base: number = 5;  
  
    acumular(valor: number) {
      this.numero += valor;
    }
}