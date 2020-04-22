import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StatusList } from '../dto/StatusList.modal';
import { UserStatus } from '../dto/UserStatus.modal';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {

  statusList: StatusList;
  private threshold = 3;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.onGetStatusRequest();
  }

  onGetStatusRequest() {
    this.http.get<StatusList>('https://dd19pcef5e.execute-api.us-east-1.amazonaws.com/Test?base=2020-04-13')
      .subscribe(response => {
        this.statusList = (response as StatusList);
        console.log(this.statusList);
    });
  }

  openQuestionModal() {}
}
