import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayVocabularyComponent } from './display-vocabulary.component';

describe('DisplayVocabularyComponent', () => {
  let component: DisplayVocabularyComponent;
  let fixture: ComponentFixture<DisplayVocabularyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayVocabularyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayVocabularyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
