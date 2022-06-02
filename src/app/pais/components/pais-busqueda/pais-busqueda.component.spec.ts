import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisBusquedaComponent } from './pais-busqueda.component';

describe('PaisBusquedaComponent', () => {
  let component: PaisBusquedaComponent;
  let fixture: ComponentFixture<PaisBusquedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaisBusquedaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisBusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
