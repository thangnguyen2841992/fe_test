import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDeleteComponent } from './test-delete.component';

describe('TestDeleteComponent', () => {
  let component: TestDeleteComponent;
  let fixture: ComponentFixture<TestDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
