import { EntityRepository, Repository } from "typeorm";
import { CreateUserDto } from "./dto/createUser.dto";
import { User } from "./user.entity";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    async createUser(createUserDto: CreateUserDto): Promise<User> {
        const { role, name } = createUserDto
        const user = this.create({
            role,
            name
        })
        await this.save(user)
        return user
    }
}
