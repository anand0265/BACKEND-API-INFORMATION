import * as paymentService from './payment.service';
import { createResponse } from "../../common/helper/response.helper";
import asyncHandler from "express-async-handler";
import { type Request, type Response } from "express";


export const createPayment = asyncHandler(async (req: Request, res: Response) => {
  const result = await paymentService.createPayment(req.body);
  res.send(createResponse(result, "Payment created successfully"));
});


export const updatePayment = asyncHandler(async (req: Request, res: Response) => {
  const result = await paymentService.updatePayment(Number(req.params.id), req.body);
  res.send(createResponse(result, "Payment updated successfully"));
});


export const editPayment = asyncHandler(async (req: Request, res: Response) => {
  const result = await paymentService.editPayment(Number(req.params.id), req.body);
  res.send(createResponse(result, "Payment edited successfully"));
});


export const deletePayment = asyncHandler(async (req: Request, res: Response) => {
  const result = await paymentService.deletePayment(Number(req.params.id));
  res.send(createResponse(result, "Payment deleted successfully"));
});


export const getAllPayments = asyncHandler(async (req: Request, res: Response) => {
  const result = await paymentService.getAllPayments();
  res.send(createResponse(result));
});


export const getPaymentById = asyncHandler(async (req: Request, res: Response) => {
  const result = await paymentService.getPaymentById(Number(req.params.id));
  res.send(createResponse(result));
});
