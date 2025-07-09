import {Field, ID, ObjectType} from '@nestjs/graphql'


@ObjectType({isAbstract: true})
export class AbstractModule {
    @Field(() => ID)
    id: number
}