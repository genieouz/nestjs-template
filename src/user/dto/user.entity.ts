import { Field, ID, ObjectType } from "@nestjs/graphql";
import { ObjectId } from "mongoose";


@ObjectType()
export class User {
    @Field(type => ID)
    id: ObjectId;

    @Field()
    email: string;
}
