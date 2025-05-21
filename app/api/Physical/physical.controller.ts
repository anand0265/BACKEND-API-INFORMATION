import * as physicalService from './physical.service';
import { createResponse } from "../../common/helper/response.helper";  
import asyncHandler from "express-async-handler";
import { type Request, type Response } from "express";

export const createPhysical = asyncHandler(async (req: Request, res: Response) => {
  const result = await physicalService.createPhysical(req.body);
  res.send(createResponse(result, "Physical details created successfully"));
});

export const updatePhysical = asyncHandler(async (req: Request, res: Response) => {
  const result = await physicalService.updatePhysical(Number(req.params.id), req.body);
  res.send(createResponse(result, "Physical details updated successfully"));
});

export const editPhysical = asyncHandler(async (req: Request, res: Response) => {
  const result = await physicalService.editPhysical(Number(req.params.id), req.body);
  res.send(createResponse(result, "Physical details edited successfully"));
});

export const deletePhysical = asyncHandler(async (req: Request, res: Response) => {
  const result = await physicalService.deletePhysical(Number(req.params.id));
  res.send(createResponse(result, "Physical details deleted successfully"));
});

export const getAllPhysical = asyncHandler(async (req: Request, res: Response) => {
  const result = await physicalService.getAllPhysical();
  res.send(createResponse(result));
});

export const getPhysicalById = asyncHandler(async (req: Request, res: Response) => {
  const result = await physicalService.getPhysicalById(Number(req.params.id));
  res.send(createResponse(result));
});
