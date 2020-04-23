import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  bsInlineValue = new Date();
  today = new Date();
  isDisabled = false;

  constructor() {
  }
  ngOnInit(): void {
  }
}
