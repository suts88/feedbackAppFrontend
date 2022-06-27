import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackDetailCommentsListComponent } from './feedback-detail-comments-list.component';

describe('FeedbackDetailCommentsListComponent', () => {
  let component: FeedbackDetailCommentsListComponent;
  let fixture: ComponentFixture<FeedbackDetailCommentsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackDetailCommentsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbackDetailCommentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
