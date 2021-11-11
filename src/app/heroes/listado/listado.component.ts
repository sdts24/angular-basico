import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {

  heroes: string[] = ['Flash', 'Hulk', 'Thor', 'Iroman'];
  heroeBorrado: string = '';

  borrar(): void {

    console.log("Borrando.....");

    const heroeBorrado = this.heroes.shift() || "";
    console.log(heroeBorrado);
    this.heroeBorrado = heroeBorrado;
  }


}
