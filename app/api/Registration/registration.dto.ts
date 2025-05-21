import { type BaseSchema } from "../../common/dto/base.dto";

export interface IRegistration extends BaseSchema {
    season: string;
    last_registration_date: Date;
    last_document_upload: Date;
    last_payment_date: Date;
    status: string;
}