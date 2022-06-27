import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {IFeedbackModel} from "../../../../Models/IFeedbackModel";
import {HttpClient} from "@angular/common/http";
import {HttpService} from "../../../Services/http.service";
import {Router} from "@angular/router";

@Component({
  selector: 'feedbackapp-Suggestions-feedback-list',
  template: `
    <div class="suggestions-feedback-list" >
      <div *ngFor="let feedback of feedbacks | async">
        <feedbackapp-suggestions-feedback (click)="navigateToFeedbackDetail(feedback.id!)" [feedback]="feedback"></feedbackapp-suggestions-feedback>
      </div>
    </div>
  `,
  styleUrls: ['../../../../styles/Suggestions-Styles/Suggestions-Feedback-List-Styles/_suggestions-feedback-list.component.styles.scss']
})
export class SuggestionsFeedbackListComponent implements OnInit {

  feedbacks!: Observable<IFeedbackModel []>;

  constructor(private httpService: HttpService, private router: Router) {
  }

  ngOnInit(): void {
    this.feedbacks = this.httpService.getAllFeedbacks();
  }

  navigateToFeedbackDetail(id: String){
    this.router.navigate([id])
}
}
