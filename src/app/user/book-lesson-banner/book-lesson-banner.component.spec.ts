import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookLessonBannerComponent } from './book-lesson-banner.component';

describe('BookLessonBannerComponent', () => {
  let component: BookLessonBannerComponent;
  let fixture: ComponentFixture<BookLessonBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookLessonBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookLessonBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
