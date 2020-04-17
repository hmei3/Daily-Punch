import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isVisible;
  constructor() {
    this.isVisible = false;
  }

  ngOnInit(): void {
  }

  toggleJoinModal() {
    this.isVisible = true;
  }
}
