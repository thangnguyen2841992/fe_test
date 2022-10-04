import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcerciseCreateComponent } from './excercise-create.component';

describe('ExcerciseCreateComponent', () => {
  let component: ExcerciseCreateComponent;
  let fixture: ComponentFixture<ExcerciseCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcerciseCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcerciseCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
