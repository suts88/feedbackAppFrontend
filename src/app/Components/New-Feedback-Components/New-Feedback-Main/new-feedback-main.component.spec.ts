import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFeedbackMainComponent } from './new-feedback-main.component';

describe('NewFeedbackMainComponent', () => {
  let component: NewFeedbackMainComponent;
  let fixture: ComponentFixture<NewFeedbackMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewFeedbackMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewFeedbackMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
