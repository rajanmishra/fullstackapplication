import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Review } from '../model/review';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = "http://localhost:4000/reviews";
@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http: HttpClient) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getReviews (): Observable<Review[]> {
    return this.http.get<Review[]>(apiUrl)
      .pipe(
        tap(heroes => console.log('fetched Reviews')),
        catchError(this.handleError('getReviews', []))
      );
  }
  
  getReview(reviewId: number): Observable<Review> {
    const url = `${apiUrl}/${reviewId}`;
    return this.http.get<Review>(url).pipe(
      tap(_ => console.log(`fetched review id=${reviewId}`)),
      catchError(this.handleError<Review>(`getgetReview id=${reviewId}`))
    );
  }
  
  addReview (review): Observable<Review> {
    review.employeeId = Number(review.employeeId);
    review.reviewerId = Number(review.reviewerId);
    review.createdAt = new Date();
    review.lastModifiedAt = new Date();
    return this.http.post<Review>(apiUrl, review, httpOptions).pipe(
      tap((review: Review) => console.log(`added review w/ id=${review.reviewId}`)),
      catchError(this.handleError<Review>('addReview'))
    );
  }
  
  updateReview (reviewId, review): Observable<any> {
    const url = `${apiUrl}/${reviewId}`;
    review.employeeId = Number(review.employeeId);
    review.reviewerId = Number(review.reviewerId);
  
    review.createdAt = new Date();
    review.lastModifiedAt = new Date();
    return this.http.put(url, review, httpOptions).pipe(
      tap(_ => console.log(`updated review id=${reviewId}`)),
      catchError(this.handleError<any>('updateReview'))
    );
  }
  
  deleteReview (reviewId): Observable<Review> {
    const url = `${apiUrl}/${reviewId}`;
    return this.http.delete<Review>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted review id=${reviewId}`)),
      catchError(this.handleError<Review>('deleteReview'))
    );
  }
}
