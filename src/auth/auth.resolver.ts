import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { IUser } from "~/user/schemas/interfaces/user.interface";
import { AuthService } from "./auth.service";
import { LoginInput } from "./dto/login.input";
import { RegisterInput } from "./dto/register.input";
import { Session } from "./dto/session.type";

@Resolver()
export class AuthResolver {
    constructor(private readonly authService: AuthService) {}

    @Mutation(returns => Session)
    register(
        @Args({ name: 'registerInput', type: () => RegisterInput }) registerInput: IUser
    ): Promise<Session> {
        return this.authService.register(registerInput);
    }

    @Query(returns => Session)
    login(
        @Args({ name: 'loginInput', type: () => LoginInput }) loginInput: LoginInput,
    ): Promise<Session> {
        return this.authService.login(loginInput);
    }
}