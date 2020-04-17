import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // $('#sandbox-container div').datepicker({
    //   forceParse: false,
    //   daysOfWeekHighlighted: "0,6",
    //   todayHighlight: true
    // });
    $('#sandbox-container .input-group.date').datepicker({
      // setDate: new Date(),
      forceParse: false,
      daysOfWeekHighlighted: "0,6",
      todayHighlight: true
    });
  }
}
