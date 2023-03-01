import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleviewChildComponent } from './sampleview-child.component';

describe('SampleviewChildComponent', () => {
  let component: SampleviewChildComponent;
  let fixture: ComponentFixture<SampleviewChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleviewChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleviewChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
