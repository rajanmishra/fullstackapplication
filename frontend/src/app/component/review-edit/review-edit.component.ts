import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ReviewService } from '../../service/review.service';
import { ApiService } from '../../service/api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Employee } from '../../model/employee';

@Component({
  selector: 'app-review-edit',
  templateUrl: './review-edit.component.html',
  styleUrls: ['./review-edit.component.scss']
})
export class ReviewEditComponent implements OnInit {

  reviewForm: FormGroup;
  reviewId:number;
  employeeId:number;
  review:string='';
  reviewerId:number;
  createdAt:Date=null;
  lastModifiedAt:Date=null;
  isLoadingResults = false;
  data: Employee[] = [];
  constructor(private router: Router, private route: ActivatedRoute, private reviewService: ReviewService, private api: ApiService, private formBuilder: FormBuilder) { }
  

  ngOnInit() {
    this.getReview(this.route.snapshot.params['id']);
    this.reviewForm = this.formBuilder.group({
      'employeeId' : [null, Validators.required],
      'reviewerId' : [null, Validators.required],
      'review' : [null, Validators.required],
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

  getReview(id) {
    this.reviewService.getReview(id).subscribe(data => {
      this.reviewId = data.reviewId;
      this.reviewForm.setValue({
        employeeId: data.employeeId,
        reviewerId: data.reviewerId,
        review: data.review
      });
    });
  }

  onFormSubmit(form:NgForm) {
    this.isLoadingResults = true;
    this.reviewService.updateReview(this.reviewId, form)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/review-details', this.reviewId]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

  reviewDetails() {
    this.router.navigate(['/review-details', this.reviewId]);
  }


}
