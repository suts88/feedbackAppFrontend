import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFeedbackFormComponent } from './new-feedback-form.component';

describe('NewFeedbackFormComponent', () => {
  let component: NewFeedbackFormComponent;
  let fixture: ComponentFixture<NewFeedbackFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewFeedbackFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewFeedbackFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
