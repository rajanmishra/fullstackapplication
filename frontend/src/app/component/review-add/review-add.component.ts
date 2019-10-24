import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReviewService } from '../../service/review.service';
import { ApiService } from '../../service/api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Employee } from '../../model/employee';

@Component({
  selector: 'app-review-add',
  templateUrl: './review-add.component.html',
  styleUrls: ['./review-add.component.scss']
})

export class ReviewAddComponent implements OnInit {
  reviewForm: FormGroup;
  //reviewId:number;
  employeeId:number;
  review:string='';
  reviewerId:number;
  createdAt:Date=null;
  lastModifiedAt:Date=null;
  isLoadingResults = false;
  data: Employee[] = [];
  constructor(private router: Router, private reviewService: ReviewService, private api: ApiService, private formBuilder: FormBuilder) { }
  

  ngOnInit() {
    this.reviewForm = this.formBuilder.group({
      // 'reviewId' : [null, Validators.required],
      'employeeId' : [null, Validators.required],
      'review' : [null, Validators.required],
      'reviewerId' : [null, Validators.required],
      'createdAt' : [null],
      'lastModifiedAt' : [null]
    });

    this.api.getEmployees()
      .subscribe(res => {
        this.data = res;
        console.log(this.data);
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

  onFormSubmit(form:NgForm) {
    this.isLoadingResults = true;
    console.log(form);
    this.reviewService.addReview(form)
      .subscribe(res => {
          let id = res['reviewId'];
          this.isLoadingResults = false;
          this.router.navigate(['/review-details', id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }


}
