import * as registrationService from './registration.service';
import { createResponse } from "../../common/helper/response.helper";  
import asyncHandler from "express-async-handler";
import { type Request, type Response , type NextFunction} from "express";


export const createRegistration = asyncHandler(async (req: Request, res: Response) => {
 const result = await registrationService.createRegistration(req.body);
 res.send(createResponse(result,"Registration Successfully"));
})

export const updateRegistration = asyncHandler(async (req: Request, res: Response) => {
    const result = await registrationService.updateRegistration(Number(req.params.id), req.body);
    res.send(createResponse(result,"Registration update successfully"));
})

export const editRegistration = asyncHandler(async (req: Request, res: Response) => {
    const result = await registrationService.editRegistration(Number(req.params.id), req.body);
    res.send(createResponse(result,"Registration update success"))
})

export const deleteRegistration = asyncHandler(async (req: Request, res: Response) => {
    const result = await registrationService.deleteRegistration(Number(req.params.id));
    res.send(createResponse(result,"Registration delete successfully"));
})

export const getAllRegistration = asyncHandler(async (req: Request, res: Response) => {
    const result = await registrationService.getAllRegistration();
    res.send(createResponse(result));
})