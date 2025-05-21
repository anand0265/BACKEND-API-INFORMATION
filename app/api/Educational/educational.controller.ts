import * as educationalService from './educational.service';
import { createResponse } from "../../common/helper/response.helper";
import asyncHandler from "express-async-handler";
import { type Request, type Response } from "express";

export const createEducational = asyncHandler(async (req: Request, res: Response) => {
  const result = await educationalService.createEducational(req.body);
  res.send(createResponse(result, "Educational details created successfully"));
});

export const updateEducational = asyncHandler(async (req: Request, res: Response) => {
  const result = await educationalService.updateEducational(Number(req.params.id), req.body);
  res.send(createResponse(result, "Educational details updated successfully"));
});

export const editEducational = asyncHandler(async (req: Request, res: Response) => {
  const result = await educationalService.editEducational(Number(req.params.id), req.body);
  res.send(createResponse(result, "Educational details edited successfully"));
});

export const deleteEducational = asyncHandler(async (req: Request, res: Response) => {
  const result = await educationalService.deleteEducational(Number(req.params.id));
  res.send(createResponse(result, "Educational details deleted successfully"));
});

export const getAllEducational = asyncHandler(async (req: Request, res: Response) => {
  const result = await educationalService.getAllEducational();
  res.send(createResponse(result));
});

export const getEducationalById = asyncHandler(async (req: Request, res: Response) => {
  const result = await educationalService.getEducationalById(Number(req.params.id));
  res.send(createResponse(result));
});
