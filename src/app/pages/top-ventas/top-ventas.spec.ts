import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopVentas } from './top-ventas';

describe('TopVentas', () => {
  let component: TopVentas;
  let fixture: ComponentFixture<TopVentas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopVentas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopVentas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
