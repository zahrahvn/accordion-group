import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccorionGroupComponent } from './accorion-group.component';

describe('AccorionGroupComponent', () => {
  let component: AccorionGroupComponent;
  let fixture: ComponentFixture<AccorionGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccorionGroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccorionGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
