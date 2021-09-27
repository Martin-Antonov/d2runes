import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunewordComponent } from './runeword.component';

describe('RunewordComponent', () => {
  let component: RunewordComponent;
  let fixture: ComponentFixture<RunewordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunewordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RunewordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
