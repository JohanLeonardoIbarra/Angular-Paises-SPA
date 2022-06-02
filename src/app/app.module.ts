import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PaisModule } from './pais/pais.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { TablaComponent } from './components/tabla/tabla.component';

@NgModule({
  declarations: [AppComponent, TablaComponent],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    PaisModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
