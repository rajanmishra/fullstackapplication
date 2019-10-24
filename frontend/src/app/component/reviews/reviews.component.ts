import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../../service/review.service';
import { Review } from '../../model/review';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  displayedColumns: string[] = ['firstName', 'lastName', 'designation'];
  data: Review[] = [];
  isLoadingResults = true;
  constructor(private api: ReviewService) { }

  ngOnInit() {
    this.api.getReviews()
      .subscribe(res => {
        this.data = res;
        console.log(this.data);
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

}
