import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { Istudents } from '../model/array';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss'],
})
export class StudentFormComponent implements OnInit {
  fnameVal!: string;
  lnameVal!: string;
  email!: string;
  contactVal!: string;
  //here contact is string bcz when we take value from input control its text value bydefault
  //custom property
  @Output() addStdInfo: EventEmitter<Istudents> = new EventEmitter<Istudents>();
  constructor() {}
  //here viewChild definds elememt reference from student-form html
  // @viewChild('fnameValue') fnameEleRef!: ElementRef;

  ngOnInit(): void {}
  // getStudentsObj() {
  //   console.log(this.fnameEleRef.nativeElement.value);
  // }
  // getStudentsObj(fname: string) {
  // getStudentsObj(fname: HTMLInputElement) {
  //   let obj = {
  //     fname: fname.value,
  //   };
  //   console.log(obj);
  //   fname.value = '';
  // }

  //   // this.Stdarray.push(obj);
  //   //to empty this form after submitting values
  //   this.fnameVal = '';
  //   this.lnameVal = '';
  //   this.email = '';
  //   this.contactVal = '';
  // }
  getStudentsObj() {
    let obj: Istudents = {
      fname: this.fnameVal,
      lname: this.lnameVal,
      email: this.email,
      contact: +this.contactVal,
    };
    this.addStdInfo.emit(obj);

    this.fnameVal = '';
    this.lnameVal = '';
    this.email = '';
    this.contactVal = '';
  }

  // function viewChild(
  //   arg0: string
  // ): (target: StudentFormComponent, propertyKey: 'fnameEleRef') => void {
  //   throw new Error('Function not implemented.');
}
function output(): (
  target: StudentFormComponent,
  propertyKey: 'addStdInfo'
) => void {
  throw new Error('Function not implemented.');
}
