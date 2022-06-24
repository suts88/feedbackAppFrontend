import {Component, OnInit} from '@angular/core';
import {IFeedbackModel} from "../../../../Models/IFeedbackModel";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'feedbackapp-suggestions-main',
  template: `
    <div>
      <feedbackapp-suggestions-menu></feedbackapp-suggestions-menu>
      <div class="content">
        <feedbackapp-suggestions-add-tab></feedbackapp-suggestions-add-tab>
        <feedbackapp-Suggestions-feedback-list></feedbackapp-Suggestions-feedback-list>
      </div>

    </div>
  `,
  styleUrls: ['../../../../styles/Suggestions-Styles/Suggestions-Main-Styles/_suggestions-main.component.styles.scss']
})
export class SuggestionsMainComponent implements OnInit {


  constructor() {
  }

  ngOnInit(): void {

  }

}
