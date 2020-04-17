import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-join-modal',
  templateUrl: './join-modal.component.html',
  styleUrls: ['./join-modal.component.scss']
})
export class JoinModalComponent implements OnInit {

  @Input() isVisiable

  constructor() { }

  ngOnInit(): void {
  }

}
