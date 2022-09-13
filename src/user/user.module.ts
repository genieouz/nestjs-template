import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserResolver } from './resolvers/user.resolver';
import {
    userModelName,
} from './schemas/user.model-name';
import { userSchema } from './schemas/user.schema';
import { UserService } from './services/user.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { schema: userSchema, name: userModelName },
    ]),
  ],
  providers: [
    UserService,
    UserResolver,
  ],
  exports: [UserService]
})
export class UserModule {}
