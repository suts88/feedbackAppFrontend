import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'feedbackapp-new-feedback-main',
  template: `
    <div class="content">
      <feedbackapp-general-navigate-back></feedbackapp-general-navigate-back>
      <feedbackapp-new-feedback-form></feedbackapp-new-feedback-form>
    </div>
  `,
  styleUrls: ['../../../../styles/New-Feedback-Styles/New-Feedback-Main-Styles/_new-feedback-main.component.styles.scss']
})
export class NewFeedbackMainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
