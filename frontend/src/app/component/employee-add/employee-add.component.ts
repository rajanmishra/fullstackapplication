import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent implements OnInit {
  employeeForm: FormGroup;
  firstName:string='';
  lastName:string='';
  designation:string='';
  createdAt:Date=null;
  lastModifiedAt:Date=null;
  isLoadingResults = false;
  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.employeeForm = this.formBuilder.group({
      'firstName' : [null, Validators.required],
      'lastName' : [null, Validators.required],
      'designation' : [null, Validators.required],
      'createdAt' : [null],
      'lastModifiedAt' : [null]
    });
  }

  onFormSubmit(form:NgForm) {
    this.isLoadingResults = true;
    console.log(form);
    this.api.addEmployee(form)
      .subscribe(res => {
          let id = res['employeeId'];
          this.isLoadingResults = false;
          this.router.navigate(['/employee-details', id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }

}
