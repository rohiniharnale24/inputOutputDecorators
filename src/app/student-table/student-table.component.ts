import { Component, Input, OnInit } from '@angular/core';
import { Istudents } from '../model/array';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss'],
})
export class StudentTableComponent implements OnInit {
  @Input() stdInfo!: Array<Istudents>;
  constructor() {}

  ngOnInit(): void {}
}
