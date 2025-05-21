

import { BaseSchema } from "../../common/dto/base.dto"; 

export interface IEducational extends BaseSchema {
  user_id: number;             // Foreign key to users.id
  jee_application_no: string;
  jee_crl_rank: number;
  x_pass_year: number;
  xii_pass_year: number;
  english_marks: number;
  maths_marks: number;
  physics_marks: number;
  other_marks: number;
  total_marks: number;
  percentage: number;          
  status: string;
}
