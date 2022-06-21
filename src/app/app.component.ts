import { Component } from '@angular/core';

@Component({
  selector: 'feedbackapp-root',
  template: `
    <div>Hallo</div>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['../styles.scss']
})
export class AppComponent {
  title = 'FeedbackAppFrontend';
}
