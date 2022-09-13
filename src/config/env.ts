import * as dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT;
export const MONGODB_URL = process.env.MONGODB_URL;
export const ENABLE_PLAYGROUND = Boolean(process.env.ENABLE_PLAYGROUND);
export const JWT_SECRET = process.env.JWT_SECRET;
export const JWT_LOGIN_TOKEN_DURATION=process.env.JWT_LOGIN_TOKEN_DURATION;
