import { BaseSchema } from "../../common/dto/base.dto";

export interface IDocument extends BaseSchema {
    user_id: number;               // Foreign key to users.id
    photo: boolean;                
    signature: boolean;            
    x_marksheet: boolean;          
    xii_marksheet: boolean;        
    jee_scorecard: boolean;      
    ews_certificate: boolean;      
    domicile_certificate: boolean; 
    status: string;
  }