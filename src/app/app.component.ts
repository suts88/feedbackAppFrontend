import { Component } from '@angular/core';

@Component({
  selector: 'feedbackapp-root',
  template: `
    <div>Hallo</div>
    <button>Button1</button>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['../styles.scss']
})
export class AppComponent {
  title = 'FeedbackAppFrontend';
}
