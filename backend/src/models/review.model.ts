import {Entity, model, property} from '@loopback/repository';

@model()
export class Review extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  reviewId?: number;

  @property({
    type: 'number',
    required: true,
  })
  employeeId: number;

  @property({
    type: 'number',
    required: true,
  })
  reviewerId: number;

  @property({
    type: 'string',
  })
  review?: string;

  @property({
    type: 'date',
    required: true,
  })
  createdAt: string;

  @property({
    type: 'date',
    required: true,
  })
  lastModifiedAt: string;


  constructor(data?: Partial<Review>) {
    super(data);
  }
}

export interface ReviewRelations {
  // describe navigational properties here
}

export type ReviewWithRelations = Review & ReviewRelations;
