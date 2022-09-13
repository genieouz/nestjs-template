import { Injectable, NotFoundException } from '@nestjs/common';
import { IUser } from '~/user/schemas/interfaces/user.interface';
import { UserService } from '~/user/services/user.service';
import { Session } from './dto/session.type';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import { JWT_SECRET } from '~/config/env';
import { LoginInput } from './dto/login.input';

@Injectable()
export class AuthService {

    constructor(private readonly userService: UserService) {}

    async register(user: IUser): Promise<Session> {
        user.password = this.hashPassword(user.password);
        let newUser = await this.userService.insertOne(user);
        const token = jwt.sign({ data: newUser }, JWT_SECRET);
        newUser = newUser.toObject();
        delete newUser.password;
        return { user: newUser, token };
    }

    async login(credentials: LoginInput): Promise<Session> {
        let user = await this.userService.findOne({ email: credentials.email });
        if(!bcrypt.compareSync(credentials.password, user.password)) {
            throw new NotFoundException();
        }
        user = user.toObject();
        delete user.password;
        const token = jwt.sign({ data: user }, JWT_SECRET)
        return { user, token };
    }

    async isTokenValid(token: string): Promise<boolean | IUser> {
        return new Promise((resolve, reject) => {
            jwt.verify(token, JWT_SECRET, (err, result) => {
                if(err) {
                    resolve(false);
                } else {
                    resolve(result.data);
                }
            })
        });
    }

    hashPassword(plaintextPassword: string): string {
        return bcrypt.hashSync(plaintextPassword, 10);
    }
}
