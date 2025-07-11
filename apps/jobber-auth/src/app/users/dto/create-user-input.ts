import { Field, InputType } from "@nestjs/graphql";
import { IsEmail, IsStrongPassword } from "class-validator";

@InputType()
export class createUserInput {
    @Field()
    @IsEmail()
    email: string;

    @Field()
    @IsStrongPassword()
    password: string;
}