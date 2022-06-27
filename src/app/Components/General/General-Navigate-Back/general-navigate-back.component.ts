import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'feedbackapp-general-navigate-back',
  template: `
    <div (click)="navigateToSuggestions()" class="navigate-back">
      <img src="../../../../assets/shared/icon-arrow-left.svg" alt="">
      <p>Go Back</p>
    </div>
  `,
  styleUrls: ['../../../../styles/General-Styles/_navigate-back.component.styles.scss']
})
export class GeneralNavigateBackComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToSuggestions(){
    this.router.navigate(['']);
  }
}
