import {Component, Input, OnInit} from '@angular/core';
import {ICommentModel} from "../../../../Models/ICommentModel";

@Component({
  selector: 'feedbackapp-feedback-detail-comments-list',
  template: `
    <div class="comments-list" *ngIf="comments; else elseBlock">
      <div class="comments-list-header">
        <p>{{comments?.length}} Comments</p>
      </div>
      <div class="comments-list-box" *ngFor="let comment of comments;index as i;">
        <h4>Comment {{i+1}}:</h4>
        <p>{{comment.content}}</p>
        <hr>
      </div>
    </div>
    <ng-template #elseBlock >
      <h1>No Content!</h1>
    </ng-template>
  `,
  styleUrls: ['../../../../styles/Feedback-Detail-Styles/Feedback-Detail-Comments-List-Styles/_feedback-detail-comments-list.component.styles.scss']
})
export class FeedbackDetailCommentsListComponent implements OnInit {

  @Input() comments?: ICommentModel[];

  constructor() { }

  ngOnInit(): void {
  }

}
