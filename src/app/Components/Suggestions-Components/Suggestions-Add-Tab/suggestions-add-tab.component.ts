import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'feedbackapp-suggestions-add-tab',
  template: `
    <div class="suggestions-add-tab">
      <label for="sort">Sort by</label>
      <select name="sort" id="">
        <option value="mostup">Most Upvotes</option>
      </select>
      <button><img src="../../../../assets/shared/icon-plus.svg" alt=""> Add Feedback</button>
    </div>
  `,
  styleUrls: ['../../../../styles/Suggestions-Styles/Suggestions-Add-Tab-Styles/_suggestions-add-tab.component.styles.scss']
})
export class SuggestionsAddTabComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
