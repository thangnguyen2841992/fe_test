import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByKeyComponent } from './search-by-key.component';

describe('SearchByKeyComponent', () => {
  let component: SearchByKeyComponent;
  let fixture: ComponentFixture<SearchByKeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchByKeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
