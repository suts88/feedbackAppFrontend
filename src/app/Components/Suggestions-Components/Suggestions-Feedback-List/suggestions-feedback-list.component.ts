import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {IFeedbackModel} from "../../../../Models/IFeedbackModel";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'feedbackapp-Suggestions-feedback-list',
  template: `
    <div class="suggestions-feedback-list" >
      <div *ngFor="let feedback of feedbacks | async">
        <feedbackapp-suggestions-feedback [feedback]="feedback"></feedbackapp-suggestions-feedback>
      </div>
    </div>
  `,
  styleUrls: ['../../../../styles/Suggestions-Styles/Suggestions-Feedback-List-Styles/_suggestions-feedback-list.component.styles.scss']
})
export class SuggestionsFeedbackListComponent implements OnInit {

  feedbacks!: Observable<IFeedbackModel []>;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.feedbacks = this.http.get<IFeedbackModel[]>('http://localhost:8080/feedbacks/all');
   // this.feedbacks.subscribe(p => console.log(p));
  }
}
