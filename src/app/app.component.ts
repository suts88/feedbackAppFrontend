import {Component, OnInit} from '@angular/core';
import {IFeedbackModel} from "../Models/IFeedbackModel";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'feedbackapp-root',
  template: `
    <div>
      <feedbackapp-suggestions-main></feedbackapp-suggestions-main>
    </div>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['../styles.scss']
})
export class AppComponent implements OnInit{

  constructor(){}
  ngOnInit(): void {}

}
