import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqInfo } from './faq-info';

describe('FaqInfo', () => {
  let component: FaqInfo;
  let fixture: ComponentFixture<FaqInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaqInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaqInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
