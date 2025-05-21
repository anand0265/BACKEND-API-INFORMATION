import * as personalService from './personal.service';
import { createResponse } from "../../common/helper/response.helper";  
import asyncHandler from "express-async-handler";
import { type Request, type Response } from "express";

export const createPersonalDetails = asyncHandler(async (req: Request, res: Response) => {
  const result = await personalService.createPersonalDetails(req.body);
  res.send(createResponse(result, "Personal details created successfully"));
});

export const updatePersonalDetails = asyncHandler(async (req: Request, res: Response) => {
  const result = await personalService.updatePersonalDetails(Number(req.params.id), req.body);
  res.send(createResponse(result, "Personal details updated successfully"));
});

export const editPersonalDetails = asyncHandler(async (req: Request, res: Response) => {
  const result = await personalService.editPersonalDetails(Number(req.params.id), req.body);
  res.send(createResponse(result, "Personal details edited successfully"));
});

export const deletePersonalDetails = asyncHandler(async (req: Request, res: Response) => {
  const result = await personalService.deletePersonalDetails(Number(req.params.id));
  res.send(createResponse(result, "Personal details deleted successfully"));
});

export const getAllPersonalDetails = asyncHandler(async (req: Request, res: Response) => {
  const result = await personalService.getAllPersonalDetails();
  res.send(createResponse(result));
});

export const getPersonalDetailsById = asyncHandler(async (req: Request, res: Response) => {
  const result = await personalService.getPersonalDetailsById(Number(req.params.id));
  res.send(createResponse(result));
});
