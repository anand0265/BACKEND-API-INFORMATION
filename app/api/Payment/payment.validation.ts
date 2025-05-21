import { body } from "express-validator";


export const createPayment = [
  body("user_id")
    .notEmpty()
    .withMessage("user_id is required")
    .isInt()
    .withMessage("user_id must be an integer"),

  body("payment_amount")
    .notEmpty()
    .withMessage("payment_amount is required")
    .isDecimal()
    .withMessage("payment_amount must be a decimal number"),

  body("payment_transaction_id")
    .notEmpty()
    .withMessage("payment_transaction_id is required")
    .isString()
    .withMessage("payment_transaction_id must be a string"),

  body("payment_datetime")
    .notEmpty()
    .withMessage("payment_datetime is required")
    .isISO8601()
    .toDate()
    .withMessage("payment_datetime must be a valid ISO8601 date"),

  body("status")
    .notEmpty()
    .withMessage("status is required")
    .isString()
    .withMessage("status must be a string"),
];

// UPDATE validation (same as create)
export const updatePayment = [...createPayment];

// PATCH (edit) validation – all optional
export const editPayment = [
  body("user_id")
    .optional()
    .isInt()
    .withMessage("user_id must be an integer"),

  body("payment_amount")
    .optional()
    .isDecimal()
    .withMessage("payment_amount must be a decimal number"),

  body("payment_transaction_id")
    .optional()
    .isString()
    .withMessage("payment_transaction_id must be a string"),

  body("payment_datetime")
    .optional()
    .isISO8601()
    .toDate()
    .withMessage("payment_datetime must be a valid ISO8601 date"),

  body("status")
    .optional()
    .isString()
    .withMessage("status must be a string"),
];
