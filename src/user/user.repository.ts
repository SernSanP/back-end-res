import { EntityRepository, Repository } from "typeorm";
import { CreateUserDto } from "./dto/createUser.dto";
import { User } from "./user.entity";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    async createUser(createUserDto: CreateUserDto): Promise<User> {
        const { role, name, id } = createUserDto
        const user = this.create({
            role,
            name,
            id
        })
        await this.save(user)
        return user
    }
}
