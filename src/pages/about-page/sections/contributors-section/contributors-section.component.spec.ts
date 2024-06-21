import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributorsSectionComponent } from './contributors-section.component';

describe('ContributorsSectionComponent', () => {
  let component: ContributorsSectionComponent;
  let fixture: ComponentFixture<ContributorsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContributorsSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContributorsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
