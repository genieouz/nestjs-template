import { Field, InputType } from "@nestjs/graphql";


@InputType()
export class UserUpdateInput {
    @Field()
    id: string;
}
