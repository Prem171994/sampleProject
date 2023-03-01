import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Behaviour1Component } from './behaviour1.component';

describe('Behaviour1Component', () => {
  let component: Behaviour1Component;
  let fixture: ComponentFixture<Behaviour1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Behaviour1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Behaviour1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
