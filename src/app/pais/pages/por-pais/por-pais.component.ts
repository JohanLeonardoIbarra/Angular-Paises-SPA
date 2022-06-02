import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [],
})
export class PorPaisComponent {
  error: boolean = false;
  paises: Pais[] = [];
  termino: string = '';

  buscar(termino: string) {
    this.termino = termino;
    this.error = false;
    this.paisService.buscarPais(termino).subscribe(
      (data) => {
        this.paises = data;
      },
      (err) => {
        this.error = true;
      }
    );
  }

  constructor(private paisService: PaisService) {}
}
