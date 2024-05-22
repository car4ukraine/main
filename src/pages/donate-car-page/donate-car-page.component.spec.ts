import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonateCarPageComponent } from './donate-car-page.component';

describe('DonateCarPageComponent', () => {
  let component: DonateCarPageComponent;
  let fixture: ComponentFixture<DonateCarPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonateCarPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DonateCarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
