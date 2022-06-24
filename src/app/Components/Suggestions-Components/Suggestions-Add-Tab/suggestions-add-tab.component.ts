import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'feedbackapp-suggestions-add-tab',
  template: `
    <div class="suggestions-add-tab">
      <label for="sort">Sort by</label>
      <select name="sort" id="">
        <option value="mostup">Most Upvotes</option>
      </select>
      <button (click)="navigateToNewFeedbackPage()"><img src="../../../../assets/shared/icon-plus.svg" alt=""> Add Feedback</button>
    </div>
  `,
  styleUrls: ['../../../../styles/Suggestions-Styles/Suggestions-Add-Tab-Styles/_suggestions-add-tab.component.styles.scss']
})
export class SuggestionsAddTabComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToNewFeedbackPage(){
    this.router.navigate(['/add']);
  }
}
