import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './models/users.models';
import { UsersService } from './users.service';
import { createUserInput } from './dto/create-user-input';

@Resolver(() => User)
export class UsersResolver {
    constructor (private readonly usersService: UsersService) {}
     
    @Mutation(() => User)
    async createUser(@Args("createUserInput") createUserInput: createUserInput){
        return this.usersService.createUser(createUserInput);
    }


    @Query(() => [User], {name: 'users'}) 
    async getAllUsers() {   
         return this.usersService.getUser()   
    }
}
         