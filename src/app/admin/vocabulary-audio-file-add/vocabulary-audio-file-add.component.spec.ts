import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VocabularyAudioFileAddComponent } from './vocabulary-audio-file-add.component';

describe('VocabularyAudioFileAddComponent', () => {
  let component: VocabularyAudioFileAddComponent;
  let fixture: ComponentFixture<VocabularyAudioFileAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VocabularyAudioFileAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VocabularyAudioFileAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
