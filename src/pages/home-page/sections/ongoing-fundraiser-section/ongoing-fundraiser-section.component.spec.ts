import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OngoingFundraiserSectionComponent } from './ongoing-fundraiser-section.component';

describe('OngoingFundraiserSectionComponent', () => {
  let component: OngoingFundraiserSectionComponent;
  let fixture: ComponentFixture<OngoingFundraiserSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OngoingFundraiserSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OngoingFundraiserSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
