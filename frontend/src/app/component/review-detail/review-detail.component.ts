import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReviewService } from '../../service/review.service';
import { Review } from '../../model/review';

@Component({
  selector: 'app-review-detail',
  templateUrl: './review-detail.component.html',
  styleUrls: ['./review-detail.component.scss']
})
export class ReviewDetailComponent implements OnInit {
  review: Review = { employeeId: 0, reviewId :0, reviewerId: 0, review: '', createdAt: null, lastModifiedAt: null };
  isLoadingResults = true;
    constructor(private route: ActivatedRoute, private api: ReviewService, private router: Router) { }
  
  

  ngOnInit() {
    this.getReviewDetails(this.route.snapshot.params['id']);
  }

  getReviewDetails(id) {
    this.api.getReview(id)
      .subscribe(data => {
        this.review = data;
        console.log(this.review);
        this.isLoadingResults = false;
      });
  }

  deleteReview(id) {
    this.isLoadingResults = true;
    this.api.deleteReview(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/reviews']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

}
