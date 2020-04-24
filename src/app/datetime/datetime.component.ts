import { Component, OnInit, OnDestroy } from '@angular/core';
import { timer, Subscription } from 'rxjs';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.component.html',
  styleUrls: ['./datetime.component.scss']
})
export class DatetimeComponent implements OnInit, OnDestroy {

  private dateSub: Subscription;
  today = Date.now();
  constructor() { }

  ngOnInit(): void {
    const numbers = timer(0, 1000);
    this.dateSub = numbers.subscribe(() => {
      this.today = Date.now();
    });
  }
  ngOnDestroy(): void {
    this.dateSub.unsubscribe();
  }

}
