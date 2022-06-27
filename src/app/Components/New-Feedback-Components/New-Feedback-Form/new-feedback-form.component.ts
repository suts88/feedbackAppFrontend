import { Component, OnInit } from '@angular/core';
import { IFeedbackModel } from 'src/Models/IFeedbackModel';
import {HttpService} from "../../../Services/http.service";
import {HttpClient} from "@angular/common/http";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'feedbackapp-new-feedback-form',
  template: `
      <div class="new-feedback-form">
      <div class="new-feedback-form-header">
        <img src="../../../../assets/shared/icon-new-feedback.svg" alt="">
        <p>Create New Feedback</p>
      </div>
      <div class="new-feedback-form-form">
        <form (ngSubmit)="saveNewFeedback(form)"  #form="ngForm">
          <div class="form-group">
            <p>Feedback Title</p>
            <p>Add a short, descriptive headline</p>
            <input type="text" class="form-control" name="feedbackTitle" [ngModel]="feedback.feedbackTitle" required>
          </div>
          <div class="form-group">
            <p>Category</p>
            <p>Choose a category for your feedback</p>
            <select name="category" [ngModel]="feedback.category" required>
              <option>Feature</option>
              <option>Enhancement</option>
              <option>Else</option>
            </select>
          </div>
          <div class="form-group">
            <p>Feedback Detail</p>
            <p>Include any specific comments on what should be improved, added, etc.</p>
            <textarea name="description"  [ngModel]="feedback.description"></textarea>
          </div>
          <div class="new-feedback-form-form-button-group">
            <button [disabled]="!form.valid"  type="submit">Add Feedback</button>
            <button type="reset">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  `,
  styleUrls: ['../../../../styles/New-Feedback-Styles/New-Feedback-Form-Styles/_new-feedback-form.component.styles.scss']
})
export class NewFeedbackFormComponent implements OnInit {

  feedback: IFeedbackModel = {
    feedbackTitle : '',
    category: '',
    description: '',
    upvotes: '',
    status: '',
    comments: []
  };

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
  }

  saveNewFeedback(f: NgForm){
  this.feedback.feedbackTitle = f.form.value.feedbackTitle;
    this.feedback.category = f.form.value.category;
    this.feedback.description = f.form.value.description;
    //console.log(f.form.value);
    //console.log(this.feedback);
    this.httpService.createNewFeedback(f.form.value).subscribe();
    f.reset();
  }
}
