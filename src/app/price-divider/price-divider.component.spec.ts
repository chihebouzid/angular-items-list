import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceDividerComponent } from './price-divider.component';

describe('PriceDividerComponent', () => {
  let component: PriceDividerComponent;
  let fixture: ComponentFixture<PriceDividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PriceDividerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PriceDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
