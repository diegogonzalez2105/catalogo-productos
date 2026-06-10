import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortControls } from './sort-controls';

describe('SortControls', () => {
  let component: SortControls;
  let fixture: ComponentFixture<SortControls>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SortControls],
    }).compileComponents();

    fixture = TestBed.createComponent(SortControls);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
