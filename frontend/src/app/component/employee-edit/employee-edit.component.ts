import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent implements OnInit {
  employeeForm: FormGroup;
  employeeId:number=null;
  firstName:string='';
  lastName:string='';
  designation:string='';
  createdAt:Date=null;
  lastModifiedAt:Date=null;
  isLoadingResults = false;
  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getEmployee(this.route.snapshot.params['id']);
    this.employeeForm = this.formBuilder.group({
      'firstName' : [null, Validators.required],
      'lastName' : [null, Validators.required],
      'designation' : [null, Validators.required],
    });
  }

  getEmployee(id) {
    this.api.getEmployee(id).subscribe(data => {
      this.employeeId = data.employeeId;
      this.employeeForm.setValue({
        firstName: data.firstName,
        lastName: data.lastName,
        designation: data.designation
      });
    });
  }

  onFormSubmit(form:NgForm) {
    this.isLoadingResults = true;
    this.api.updateEmployee(this.employeeId, form)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/employee-details', this.employeeId]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

  employeeDetails() {
    this.router.navigate(['/employee-details', this.employeeId]);
  }

}
