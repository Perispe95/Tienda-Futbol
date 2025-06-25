import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Selecciones } from './selecciones';

describe('Selecciones', () => {
  let component: Selecciones;
  let fixture: ComponentFixture<Selecciones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Selecciones]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Selecciones);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
