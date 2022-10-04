import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrammarCreateComponent } from './grammar-create.component';

describe('GrammarCreateComponent', () => {
  let component: GrammarCreateComponent;
  let fixture: ComponentFixture<GrammarCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrammarCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrammarCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
