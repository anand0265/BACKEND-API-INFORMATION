import * as documentService from './document.service';
import { createResponse } from "../../common/helper/response.helper";
import asyncHandler from "express-async-handler";
import { type Request, type Response } from "express";

export const createDocument = asyncHandler(async (req: Request, res: Response) => {
  const result = await documentService.createDocument(req.body);
  res.send(createResponse(result, "Document created successfully"));
});

export const updateDocument = asyncHandler(async (req: Request, res: Response) => {
  const result = await documentService.updateDocument(Number(req.params.id), req.body);
  res.send(createResponse(result, "Document updated successfully"));
});

export const editDocument = asyncHandler(async (req: Request, res: Response) => {
  const result = await documentService.editDocument(Number(req.params.id), req.body);
  res.send(createResponse(result, "Document edited successfully"));
});

export const deleteDocument = asyncHandler(async (req: Request, res: Response) => {
  const result = await documentService.deleteDocument(Number(req.params.id));
  res.send(createResponse(result, "Document deleted successfully"));
});

export const getAllDocuments = asyncHandler(async (req: Request, res: Response) => {
  const result = await documentService.getAllDocuments();
  res.send(createResponse(result));
});

export const getDocumentById = asyncHandler(async (req: Request, res: Response) => {
  const result = await documentService.getDocumentById(Number(req.params.id));
  res.send(createResponse(result));
});
