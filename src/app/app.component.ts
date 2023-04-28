import { Component } from '@angular/core';
import { Istudents } from './model/array';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // title = 'inputOutputDecorators';

  Stdarray: Istudents[] = [
    {
      fname: 'rohini',
      lname: 'harnale',
      email: 'harnaler@gmail.com',
      contact: 1222222,
    },
    {
      fname: 'rohan',
      lname: 'harnale',
      email: 'rohan@gmail.com',
      contact: 1222222,
    },
    {
      fname: 'varsha',
      lname: 'mahajan',
      email: 'varsha@gmail.com',
      contact: 1222222,
    },
  ];

  constructor() {}
  onStdAdded(std: Istudents) {
    //console.log(std);
    this.Stdarray.push(std);
    //this.Stdarray = [...this.Stdarray, std];
  }
}
