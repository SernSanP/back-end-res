import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) { }

    async validateUser(id: string): Promise<any> {
        const user = await this.userService.userRepository.findOne(id);
        if (user) {
            const { ...result } = user;
            return result;
        }
        return null;
    }

    async login(id: any) {
        const user = await this.userService.userRepository.findOne(id);
        if (user) {
            const payload = { name: user.name, role: user.role };
            return {
                access_token: this.jwtService.sign(payload),
            };
        }
        else {
            throw new UnauthorizedException('Please check your login credentials');
        }
    }
}