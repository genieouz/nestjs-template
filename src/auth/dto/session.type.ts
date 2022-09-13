import { Field, ObjectType } from "@nestjs/graphql";
import { User } from "~/user/dto/user.entity";
import { IUser } from "~/user/schemas/interfaces/user.interface";

@ObjectType()
export class Session {
    @Field(type => User)
    user: IUser;

    @Field()
    token: string;
}
