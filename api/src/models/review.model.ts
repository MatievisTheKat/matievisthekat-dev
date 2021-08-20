import { Entity, model, property } from "@loopback/repository";

@model()
export class Review extends Entity {
  @property({
    type: "number",
    required: true,
  })
  stars: number;

  @property({
    type: "string",
    required: true,
  })
  text: string;

  @property({
    type: "string",
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: "string",
  })
  userId?: string;

  constructor(data?: Partial<Review>) {
    super(data);
  }
}

export interface ReviewRelations {
  // describe navigational properties here
}

export type ReviewWithRelations = Review & ReviewRelations;
