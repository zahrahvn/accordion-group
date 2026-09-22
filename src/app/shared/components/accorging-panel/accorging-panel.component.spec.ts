import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccorgingPanelComponent } from './accorging-panel.component';

describe('AccorgingPanelComponent', () => {
  let component: AccorgingPanelComponent;
  let fixture: ComponentFixture<AccorgingPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccorgingPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccorgingPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
