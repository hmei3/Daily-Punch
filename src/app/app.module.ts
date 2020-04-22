import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StatusComponent } from './status/status.component';
import { CalendarComponent } from './calendar/calendar.component';
import { RankingComponent } from './ranking/ranking.component';
import { DatetimeComponent } from './datetime/datetime.component';
import { JoinModalComponent } from './join-modal/join-modal.component';
import { QuestionListModalComponent } from './question-list-modal/question-list-modal.component';
import { HttpClientModule } from '@angular/common/http';
import { ComponentPlaceholderDirective } from './directives/placeholder/component-placeholder.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StatusComponent,
    CalendarComponent,
    RankingComponent,
    DatetimeComponent,
    JoinModalComponent,
    QuestionListModalComponent,
    ComponentPlaceholderDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
