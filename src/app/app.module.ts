import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { SuggestionsMainComponent } from './Components/Suggestions-Components/Suggestions-Main/suggestions-main.component';
import { SuggestionsMenuComponent } from './Components/Suggestions-Components/Suggestions-Menu/suggestions-menu.component';
import { SuggestionsAddTabComponent } from './Components/Suggestions-Components/Suggestions-Add-Tab/suggestions-add-tab.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";
import {FormsModule} from "@angular/forms";
import { SuggestionsFeedbackListComponent } from './Components/Suggestions-Components/Suggestions-Feedback-List/suggestions-feedback-list.component';
import { SuggestionsFeedbackComponent } from './Components/Suggestions-Components/Suggestions-Feedback/suggestions-feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    SuggestionsMainComponent,
    SuggestionsMenuComponent,
    SuggestionsAddTabComponent,
    SuggestionsFeedbackListComponent,
    SuggestionsFeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
