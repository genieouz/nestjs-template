import { Schema } from 'mongoose';
import { UserRole } from '../enums/user-role.enum';

export const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: Object.values(UserRole), default: UserRole.USER }
});
