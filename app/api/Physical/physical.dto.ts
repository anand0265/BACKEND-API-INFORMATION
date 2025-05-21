import { type BaseSchema } from "../../common/dto/base.dto";

export interface IPhysical extends BaseSchema {
    user_id: number;           // Foreign key to users.id
    weight_kg: number;
    physical_defect: string;   
    status: string;           
  }
