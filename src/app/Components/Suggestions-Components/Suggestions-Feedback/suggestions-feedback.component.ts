import {Component, Input, OnInit} from '@angular/core';
import {IFeedbackModel} from 'src/Models/IFeedbackModel';

@Component({
  selector: 'feedbackapp-suggestions-feedback',
  template: `
    <div class="suggestions-feedback" *ngIf="feedback; else elseBlock">
      <div class="suggestions-feedback-text">
        <p class="suggestions-feedback-title">{{feedback.feedbackTitle}}</p>
        <p class="suggestions-feedback-description">{{feedback.description}}</p>
      </div>
      <div class="suggestions-feedback-category-box">
        <p>{{feedback.category}}</p>
      </div>
      <div class="suggestions-feedback-box-group">
        <div class="suggestions-feedback-upvote-box">
          <img src="../../../../assets/shared/icon-arrow-up.svg" alt="">
          <p>{{feedback.upvotes}}</p>
        </div>
        <div class="suggestions-feedback-comments-group">
          <img src="../../../../assets/shared/icon-comments.svg" alt="">
          <p>{{commentsLength}}</p>
        </div>
      </div>
    </div>
    <ng-template #elseBlock>
      <h1>No Content!</h1>
    </ng-template>
  `,
  styleUrls: ['../../../../styles/Suggestions-Styles/Suggestions-Feedback-Styles/_suggestions-feedback.component.styles.scss']
})
export class SuggestionsFeedbackComponent implements OnInit {

  @Input() feedback!: IFeedbackModel;

  commentsLength!: number;


  constructor() {
  }

  ngOnInit(): void {
    this.commentsLength = this.feedback?.comments?.length ? this.feedback.comments.length : 0;

  }

}
