import {AbstractModule} from "@jobber/nestjs"
import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class User extends AbstractModule{
    @Field()
    email: string;
} 