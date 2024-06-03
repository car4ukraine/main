import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonatedVehiclesSectionComponent } from './donated-vehicles-section.component';

describe('DonatedVehiclesSectionComponent', () => {
  let component: DonatedVehiclesSectionComponent;
  let fixture: ComponentFixture<DonatedVehiclesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonatedVehiclesSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DonatedVehiclesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
