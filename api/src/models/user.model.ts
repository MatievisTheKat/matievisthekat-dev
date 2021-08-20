import { Entity, model, property, hasOne} from "@loopback/repository";
import {Review} from './review.model';

@model()
export class User extends Entity {
  @property({
    type: "string",
    required: true,
  })
  username: string;

  @property({
    type: "string",
    required: true,
  })
  email: string;

  @property({
    type: "string",
    id: true,
    generated: true,
  })
  id?: string;

  @hasOne(() => Review)
  review: Review;

  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;
