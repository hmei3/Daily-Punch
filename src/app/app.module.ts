import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StatusComponent } from './status/status.component';
import { CalendarComponent } from './calendar/calendar.component';
import { RankingComponent } from './ranking/ranking.component';
import { StatusItemComponent } from './status-item/status-item.component';
import { DatetimeComponent } from './datetime/datetime.component';
import { JoinModalComponent } from './join-modal/join-modal.component';
import { QuestionListModalComponent } from './question-list-modal/question-list-modal.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StatusComponent,
    CalendarComponent,
    RankingComponent,
    StatusItemComponent,
    DatetimeComponent,
    JoinModalComponent,
    QuestionListModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
