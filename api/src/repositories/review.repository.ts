import { inject } from "@loopback/core";
import { DefaultCrudRepository } from "@loopback/repository";
import { PostgresDataSource } from "../datasources";
import { Review, ReviewRelations } from "../models";

export class ReviewRepository extends DefaultCrudRepository<
  Review,
  typeof Review.prototype.id,
  ReviewRelations
> {
  constructor(@inject("datasources.Postgres") dataSource: PostgresDataSource) {
    super(Review, dataSource);
  }
}
