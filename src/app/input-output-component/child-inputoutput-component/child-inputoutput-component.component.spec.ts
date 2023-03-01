import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildInputoutputComponentComponent } from './child-inputoutput-component.component';

describe('ChildInputoutputComponentComponent', () => {
  let component: ChildInputoutputComponentComponent;
  let fixture: ComponentFixture<ChildInputoutputComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildInputoutputComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildInputoutputComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
