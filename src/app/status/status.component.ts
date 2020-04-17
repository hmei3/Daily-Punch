import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.onGetStatusRequest();
  }

  onGetStatusRequest() {
    this.http.get("https://elapibg99h.execute-api.us-east-1.amazonaws.com/dev2?base=2020-04-15").subscribe(posts => {console.log(posts);});
  }

}
