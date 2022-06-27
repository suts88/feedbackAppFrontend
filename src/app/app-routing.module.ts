import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewFeedbackMainComponent } from './Components/New-Feedback-Components/New-Feedback-Main/new-feedback-main.component';
import { SuggestionsMainComponent } from './Components/Suggestions-Components/Suggestions-Main/suggestions-main.component';
import {
  FeedbackDetailMainComponent
} from "./Components/Feedback-Detail-Components/Feedback-Detail-Main/feedback-detail-main.component";

const routes: Routes = [
  {path: '', component: SuggestionsMainComponent},
  {path: 'add', component: NewFeedbackMainComponent},
  {path: ':id', component: FeedbackDetailMainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
