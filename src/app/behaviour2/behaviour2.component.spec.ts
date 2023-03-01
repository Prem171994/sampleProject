import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Behaviour2Component } from './behaviour2.component';

describe('Behaviour2Component', () => {
  let component: Behaviour2Component;
  let fixture: ComponentFixture<Behaviour2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Behaviour2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Behaviour2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
