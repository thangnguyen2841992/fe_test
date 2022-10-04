import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByKey1Component } from './search-by-key1.component';

describe('SearchByKey1Component', () => {
  let component: SearchByKey1Component;
  let fixture: ComponentFixture<SearchByKey1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchByKey1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByKey1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
