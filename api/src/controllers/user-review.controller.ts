import { Count, CountSchema, Filter, repository, Where } from "@loopback/repository";
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from "@loopback/rest";
import { User, Review } from "../models";
import { UserRepository } from "../repositories";

export class UserReviewController {
  constructor(@repository(UserRepository) protected userRepository: UserRepository) {}

  @get("/users/{id}/review", {
    responses: {
      "200": {
        description: "User has one Review",
        content: {
          "application/json": {
            schema: getModelSchemaRef(Review),
          },
        },
      },
    },
  })
  async get(
    @param.path.string("id") id: string,
    @param.query.object("filter") filter?: Filter<Review>,
  ): Promise<Review> {
    return this.userRepository.review(id).get(filter);
  }

  @post("/users/{id}/review", {
    responses: {
      "200": {
        description: "User model instance",
        content: { "application/json": { schema: getModelSchemaRef(Review) } },
      },
    },
  })
  async create(
    @param.path.string("id") id: typeof User.prototype.id,
    @requestBody({
      content: {
        "application/json": {
          schema: getModelSchemaRef(Review, {
            title: "NewReviewInUser",
            exclude: ["id"],
            optional: ["userId"],
          }),
        },
      },
    })
    review: Omit<Review, "id">,
  ): Promise<Review> {
    return this.userRepository.review(id).create(review);
  }

  @patch("/users/{id}/review", {
    responses: {
      "200": {
        description: "User.Review PATCH success count",
        content: { "application/json": { schema: CountSchema } },
      },
    },
  })
  async patch(
    @param.path.string("id") id: string,
    @requestBody({
      content: {
        "application/json": {
          schema: getModelSchemaRef(Review, { partial: true }),
        },
      },
    })
    review: Partial<Review>,
    @param.query.object("where", getWhereSchemaFor(Review)) where?: Where<Review>,
  ): Promise<Count> {
    return this.userRepository.review(id).patch(review, where);
  }

  @del("/users/{id}/review", {
    responses: {
      "200": {
        description: "User.Review DELETE success count",
        content: { "application/json": { schema: CountSchema } },
      },
    },
  })
  async delete(
    @param.path.string("id") id: string,
    @param.query.object("where", getWhereSchemaFor(Review)) where?: Where<Review>,
  ): Promise<Count> {
    return this.userRepository.review(id).delete(where);
  }
}
