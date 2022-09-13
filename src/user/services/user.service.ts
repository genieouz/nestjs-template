import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AbstractService } from '~/commons/abstract/abstract.service';
import { IUser } from '../schemas/interfaces/user.interface';
import { userModelName } from '../schemas/user.model-name';

@Injectable()
export class UserService extends AbstractService<IUser> {
  constructor(@InjectModel(userModelName) model: Model<IUser>) {
    super(model);
  }
}

