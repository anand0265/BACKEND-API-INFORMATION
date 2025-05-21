import { BaseSchema } from "../../common/dto/base.dto";

export interface IPayment extends BaseSchema {
  user_id: number;                    // Foreign key to users.id
  payment_amount: number;           
  payment_transaction_id: string;    
  payment_datetime: Date;            
  status: string;                    
}
