import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'feedbackapp-new-feedback-main',
  template: `
    <div class="content">
      <h1>Feedback Main!</h1>
    </div>
  `,
  styleUrls: ['../../../../styles/New-Feedback-Styles/New-Feedback-Main-Styles/_new-feedback-main.component.styles.scss']
})
export class NewFeedbackMainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
