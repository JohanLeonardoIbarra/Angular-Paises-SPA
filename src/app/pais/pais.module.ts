import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { PaisTablaComponent } from './components/pais-tabla/pais-tabla.component';
import { PaisBusquedaComponent } from './components/pais-busqueda/pais-busqueda.component';

@NgModule({
  declarations: [
    PorCapitalComponent,
    PorPaisComponent,
    PorRegionComponent,
    VerPaisComponent,
    PaisTablaComponent,
    PaisBusquedaComponent,
  ],
  imports: [CommonModule, FormsModule, HttpClientModule, RouterModule],
  exports: [
    PorCapitalComponent,
    PorPaisComponent,
    PorRegionComponent,
    VerPaisComponent,
  ],
})
export class PaisModule {}
