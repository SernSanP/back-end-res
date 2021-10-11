import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/createUser.dto';
import { UserRepository } from './user.repository';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserRepository)
        public userRepository: UserRepository,
    ) { }

    // private readonly users = [
    //     {
    //         userId: 1,
    //         username: 'john',
    //         password: 'changeme',
    //     },
    //     {
    //         userId: 2,
    //         username: 'maria',
    //         password: 'guess',
    //     },
    // ];

    // async findOne(username: string): Promise<User | undefined> {
    //     return this.userRepository.find(user => user.username === username);
    // }

    createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.userRepository.createUser(createUserDto);
    }
}