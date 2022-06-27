import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackDetailMainComponent } from './feedback-detail-main.component';

describe('FeedbackDetailMainComponent', () => {
  let component: FeedbackDetailMainComponent;
  let fixture: ComponentFixture<FeedbackDetailMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackDetailMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbackDetailMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
