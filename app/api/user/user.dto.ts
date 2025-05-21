import { type BaseSchema } from "../../common/dto/base.dto";

export interface IUser extends BaseSchema {
  email: string;
  phone: string;
  email_verified?: boolean;
  phone_verified?: boolean;
  password_hash: string;
  season?: string;
  status?: string;
}

