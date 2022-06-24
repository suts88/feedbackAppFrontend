import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'feedbackapp-root',
  template: `

    <router-outlet></router-outlet>
  `,
  styleUrls: ['../styles.scss']
})
export class AppComponent implements OnInit{

  constructor(){}
  ngOnInit(): void {}

}
