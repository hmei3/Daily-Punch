import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StatusList } from '../dto/StatusList.modal';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {

  statusList: StatusList;
  completedUserNum: number;
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.onGetStatusRequest();
  }

  onGetStatusRequest() {
    this.http.get<StatusList>('https://dd19pcef5e.execute-api.us-east-1.amazonaws.com/Test?base=2019-02-13')
      .subscribe(response => {
        this.statusList = (response as StatusList);
        this.completedUserNum = this.statusList.totalUserNum - this.statusList.uncompletedUserNum;
        console.log(this.statusList);
    });
  }

  openQuestionModal() {}
}
