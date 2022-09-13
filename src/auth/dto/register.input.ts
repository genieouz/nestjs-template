import { Field, InputType } from "@nestjs/graphql";
import { UserRole } from "~/user/enums/user-role.enum";

@InputType()
export class RegisterInput {
    @Field()
    email: string;

    @Field()
    password: string;
}
