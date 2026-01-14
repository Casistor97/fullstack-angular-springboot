import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sponsoring } from './sponsoring';

describe('Sponsoring', () => {
  let component: Sponsoring;
  let fixture: ComponentFixture<Sponsoring>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sponsoring]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sponsoring);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
