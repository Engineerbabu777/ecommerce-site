import { Controller, Get, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {

    @Get()
    getUser(){
return {username:"awais"}
    }

    @Post()
    createUser(){
        return {username:"awais"}
    }
}
