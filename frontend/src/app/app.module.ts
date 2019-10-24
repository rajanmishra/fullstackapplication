import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {MatSelectModule} from '@angular/material/select';
import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule } from "@angular/material";
import { EmployeesComponent } from './component/employees/employees.component';
import { EmployeeDetailComponent } from './component/employee-detail/employee-detail.component';
import { EmployeeAddComponent } from './component/employee-add/employee-add.component';
import { EmployeeEditComponent } from './component/employee-edit/employee-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReviewsComponent } from './component/reviews/reviews.component';
import { ReviewAddComponent } from './component/review-add/review-add.component';
import { ReviewDetailComponent } from './component/review-detail/review-detail.component';
import { ReviewEditComponent } from './component/review-edit/review-edit.component';

const routes: Routes = [
  {
    path: 'employees',
    component: EmployeesComponent,
    data: { title: 'List of Employees' }
  },
  {
    path: 'employee-details/:id',
    component: EmployeeDetailComponent,
    data: { title: 'Employee Details' }
  },
  {
    path: 'employee-add',
    component: EmployeeAddComponent,
    data: { title: 'Add Employee' }
  },
  {
    path: 'employee-edit/:id',
    component: EmployeeEditComponent,
    data: { title: 'Edit Employee' }
  },
  {
    path: 'reviews',
    component: ReviewsComponent,
    data: { title: 'View Reviews' }
  },
  {
    path: 'review-details/:id',
    component: ReviewDetailComponent,
    data: { title: 'Review Details' }
  },
  {
    path: 'review-add',
    component: ReviewAddComponent,
    data: { title: 'Add Review' }
  },
  {
    path: 'review-edit/:id',
    component: ReviewEditComponent,
    data: { title: 'Edit Review' }
  },
  { path: '',
    redirectTo: '/employees',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeDetailComponent,
    EmployeeAddComponent,
    EmployeeEditComponent,
    ReviewsComponent,
    ReviewAddComponent,
    ReviewDetailComponent,
    ReviewEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
