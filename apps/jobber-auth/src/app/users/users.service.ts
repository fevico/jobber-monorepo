import { Injectable } from '@nestjs/common';
import {Prisma} from "@prisma-clients/jobber-auth"
import { PrismaService } from '../prisma/prisma.service';
import { hash } from 'bcryptjs';

@Injectable()
export class UsersService {
    constructor(private readonly prismaService: PrismaService){}

    async createUser(user: Prisma.UserCreateInput){
        return await this.prismaService.user.create({
            data: {
                ...user, 
                password: await hash(user.password, 10)
            }
        })
    }

    async getUser(){
        return await this.prismaService.user.findMany()    
    }
}
