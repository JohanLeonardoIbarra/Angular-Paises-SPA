import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [],
})
export class PorCapitalComponent {
  paises: Pais[] = [];
  error: boolean = false;
  termino: string = '';

  buscar(termino: string) {
    this.error = false;
    this.termino = termino;
    console.log(termino);
    this.paisService.buscarCapital(termino).subscribe(
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
