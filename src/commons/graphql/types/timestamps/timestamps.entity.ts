import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Timestamps {
    @Field()
    createdAt: Date;

    @Field()
    updatedAt: Date;
}
