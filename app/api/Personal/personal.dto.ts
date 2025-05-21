import { type BaseSchema } from "../../common/dto/base.dto";

export interface IPersonalDetails extends BaseSchema {
    user_id: number;  // FK to users.id
    name: string;
    father_name: string;
    mother_name: string;
    dob: Date;
    gender: string;
    nationality: string;
    category: string;
    caste: string;
    address: string;
    district: string;
    aadhaar: string;
    status: string;
  }