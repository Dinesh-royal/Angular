import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {


EmployeeName = new FormControl('');

updateEmployeeName(){
  this.EmployeeName.setValue('john');

}
employeeForm = new FormGroup({
  Name: new FormControl(''),
  Designation : new FormControl(''),
  Address: new FormGroup({
    country: new FormControl(''),
    city: new FormControl('')
  })
});


onsubmit(){
  console.log(this.employeeForm.value)  
}

}
