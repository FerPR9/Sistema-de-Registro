import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaConferenciasComponent } from './lista-conferencias.component';

describe('ListaConferenciasComponent', () => {
  let component: ListaConferenciasComponent;
  let fixture: ComponentFixture<ListaConferenciasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaConferenciasComponent]
    });
    fixture = TestBed.createComponent(ListaConferenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
