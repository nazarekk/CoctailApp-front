import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-error-alert',
  templateUrl: './error-alert.component.html',
  styleUrls: ['./error-alert.component.css']
})
export class ErrorAlertComponent implements OnInit {
  @Input() erMassage: String;

  constructor() { }

  ngOnInit(): void {
  }

}
