import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonateCarButtonComponent } from './donate-car-button.component';

describe('DonateCarButtonComponent', () => {
  let component: DonateCarButtonComponent;
  let fixture: ComponentFixture<DonateCarButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonateCarButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DonateCarButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
