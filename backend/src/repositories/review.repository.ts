import { DefaultCrudRepository } from '@loopback/repository';
import { Review, ReviewRelations } from '../models';
import { EmployeeDataSource } from '../datasources';
import { inject } from '@loopback/core';

export class ReviewRepository extends DefaultCrudRepository<
  Review,
  typeof Review.prototype.reviewId,
  ReviewRelations
  > {
  constructor(
    @inject('datasources.employee') dataSource: EmployeeDataSource,
  ) {
    super(Review, dataSource);
  }
}
