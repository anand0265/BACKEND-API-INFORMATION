import { body } from "express-validator";

export const createRegistration = [
  body("season")
    .notEmpty()
    .withMessage("season is required")
    .isString()
    .withMessage("season must be a string"),

  body("last_registration_date")
    .notEmpty()
    .withMessage("last_registration_date is required")
    .isISO8601()
    .toDate()
    .withMessage("last_registration_date must be a valid date"),

  body("last_document_upload")
    .notEmpty()
    .withMessage("last_document_upload is required")
    .isISO8601()
    .toDate()
    .withMessage("last_document_upload must be a valid date"),

  body("last_payment_date")
    .notEmpty()
    .withMessage("last_payment_date is required")
    .isISO8601()
    .toDate()
    .withMessage("last_payment_date must be a valid date"),

  body("status")
    .notEmpty()
    .withMessage("status is required")
    .isString()
    .withMessage("status must be a string"),
];

export const updateRegistration = [
  body("season")
    .notEmpty()
    .withMessage("season is required")
    .isString()
    .withMessage("season must be a string"),

  body("last_registration_date")
    .notEmpty()
    .withMessage("last_registration_date is required")
    .isISO8601()
    .toDate()
    .withMessage("last_registration_date must be a valid date"),

  body("last_document_upload")
    .notEmpty()
    .withMessage("last_document_upload is required")
    .isISO8601()
    .toDate()
    .withMessage("last_document_upload must be a valid date"),

  body("last_payment_date")
    .notEmpty()
    .withMessage("last_payment_date is required")
    .isISO8601()
    .toDate()
    .withMessage("last_payment_date must be a valid date"),

  body("status")
    .notEmpty()
    .withMessage("status is required")
    .isString()
    .withMessage("status must be a string"),
];

export const editRegistration = [
  body("season")
    .optional()
    .isString()
    .withMessage("season must be a string"),

  body("last_registration_date")
    .optional()
    .isISO8601()
    .toDate()
    .withMessage("last_registration_date must be a valid date"),

  body("last_document_upload")
    .optional()
    .isISO8601()
    .toDate()
    .withMessage("last_document_upload must be a valid date"),

  body("last_payment_date")
    .optional()
    .isISO8601()
    .toDate()
    .withMessage("last_payment_date must be a valid date"),

  body("status")
    .optional()
    .isString()
    .withMessage("status must be a string"),
];
