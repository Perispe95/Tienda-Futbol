import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamisetasDelDia } from './camisetas-del-dia';

describe('CamisetasDelDia', () => {
  let component: CamisetasDelDia;
  let fixture: ComponentFixture<CamisetasDelDia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CamisetasDelDia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CamisetasDelDia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
