import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
username = '';

  constructor() { }

  ngOnInit() {
  }

  isUsernameEmpty() {
     return this.username === '';
  }

  onReset() {
    this.username = '';
  }

}
