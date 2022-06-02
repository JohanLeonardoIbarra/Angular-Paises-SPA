import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [],
})
export class PorPaisComponent {
  termino: string = '';
  error: boolean = false;
  paises: Pais[] = [];

  buscar() {
    this.error = false;

    this.paisService.buscarPais(this.termino).subscribe(
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
