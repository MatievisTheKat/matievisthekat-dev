import { inject, Getter} from "@loopback/core";
import { DefaultCrudRepository, repository, HasOneRepositoryFactory} from "@loopback/repository";
import { PostgresDataSource } from "../datasources";
import { User, UserRelations, Review} from "../models";
import {ReviewRepository} from './review.repository';

export class UserRepository extends DefaultCrudRepository<User, typeof User.prototype.id, UserRelations> {

  public readonly review: HasOneRepositoryFactory<Review, typeof User.prototype.id>;

  constructor(@inject("datasources.Postgres") dataSource: PostgresDataSource, @repository.getter('ReviewRepository') protected reviewRepositoryGetter: Getter<ReviewRepository>,) {
    super(User, dataSource);
    this.review = this.createHasOneRepositoryFactoryFor('review', reviewRepositoryGetter);
    this.registerInclusionResolver('review', this.review.inclusionResolver);
  }
}
