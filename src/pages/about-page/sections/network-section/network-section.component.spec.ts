import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkSectionComponent } from './network-section.component';

describe('NetworkSectionComponent', () => {
  let component: NetworkSectionComponent;
  let fixture: ComponentFixture<NetworkSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworkSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NetworkSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
