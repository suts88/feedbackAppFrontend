import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IFeedbackModel} from 'src/Models/IFeedbackModel';
import {filter, Observable} from "rxjs";
import {HttpService} from "../../../Services/http.service";

@Component({
  selector: 'feedbackapp-feedback-detail-main',
  template: `
    <div class="feedback-detail-main">
      <feedbackapp-general-navigate-back></feedbackapp-general-navigate-back>
      <div *ngIf="feedback">
        <feedbackapp-suggestions-feedback [feedback]="feedback"></feedbackapp-suggestions-feedback>
        <feedbackapp-feedback-detail-comments-list
          [comments]="feedback.comments"></feedbackapp-feedback-detail-comments-list>
      </div>
    </div>
  `,
  styleUrls: ['../../../../styles/Feedback-Detail-Styles/Feedback-Detail-Main-Styles/_feedback-detail-main.component.styles.scss']
})
export class FeedbackDetailMainComponent implements OnInit {

  feedback!: IFeedbackModel;

  constructor(private route: ActivatedRoute, private httpService: HttpService) {
  }

  ngOnInit(): void {
    this.route.params.pipe(
      filter((params: { [x: string]: any; }) => params['id'])
    )
      .subscribe(params => {
        this.httpService.getFeedbackById(params['id']).subscribe((feedback: IFeedbackModel) => {
          return this.feedback = feedback;
        })
      })

  }

}
