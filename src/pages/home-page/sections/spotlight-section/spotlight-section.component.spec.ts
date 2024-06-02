import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotlightSectionComponent } from './spotlight-section.component';

describe('SpotlightSectionComponent', () => {
  let component: SpotlightSectionComponent;
  let fixture: ComponentFixture<SpotlightSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpotlightSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpotlightSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
