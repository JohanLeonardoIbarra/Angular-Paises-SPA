import { Component, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-pais-busqueda',
  templateUrl: './pais-busqueda.component.html',
})
export class PaisBusquedaComponent {
  @Output() busqueda: EventEmitter<string> = new EventEmitter();

  termino: string = '';

  buscar() {
    this.busqueda.emit(this.termino);
  }
}
