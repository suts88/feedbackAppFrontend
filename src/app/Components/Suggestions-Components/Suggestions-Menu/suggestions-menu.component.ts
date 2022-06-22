import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'feedbackapp-Suggestions-Menu',
  template: `
    <div class="suggestions-menu">
      <div>
        <p class="suggestions-menu-text-bold">Frontend Mentor</p>
        <p class="suggestions-menu-text">Feedback Board</p>
      </div>
      <img *ngIf="!open; else closed" src="../../../../assets/shared/mobile/icon-hamburger.svg" alt="">
     <ng-template #closed> <img   src="../../../../assets/shared/mobile/icon-close.svg" alt=""></ng-template>
    </div>
  `,
  styleUrls: ['../../../../styles/Suggestions-Styles/Suggestions-Menu/_suggestions-menu.component.styles.scss']
})
export class SuggestionsMenuComponent implements OnInit {

  public open: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
