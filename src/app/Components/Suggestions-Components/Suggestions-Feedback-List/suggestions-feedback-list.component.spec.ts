import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionsFeedbackListComponent } from './suggestions-feedback-list.component';

describe('SuggestionsFeedbackListComponent', () => {
  let component: SuggestionsFeedbackListComponent;
  let fixture: ComponentFixture<SuggestionsFeedbackListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuggestionsFeedbackListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuggestionsFeedbackListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
