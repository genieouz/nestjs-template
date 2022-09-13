import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from '../dto/user.entity';
import { UserInput } from '../dto/user.input';
import { UserUpdateInput } from '../dto/user.update.input';
import { IUser } from '../schemas/interfaces/user.interface';
import { UserService } from '../services/user.service';

@Resolver()
export class UserResolver {
  constructor(private userService: UserService) {}

  @Mutation(returns => User)
  createUser(
    @Args({ name: 'userInput', type: () => UserInput })
    userInput: IUser,
  ): Promise<IUser> {
    return this.userService.insertOne(userInput);
  }

  @Mutation(returns => Boolean)
  updateUser(
    @Args({ name: 'userInput', type: () => UserUpdateInput })
    userInput: IUser,
    @Args({ name: 'userId', type: () => ID }) userId: User["id"],
  ): Promise<boolean> {
    return this.userService.updateOneById(userId, userInput);
  }

  @Query(returns => [User])
  fetchUsers(): Promise<IUser[]> {
    return this.userService.findMany();
  }

  @Query(returns => User)
  fetchUser(
    @Args({ name: 'userId', type: () => ID }) userId: User["id"],
  ): Promise<IUser> {
    return this.userService.findOneByIdOrFail(userId);
  }
}
