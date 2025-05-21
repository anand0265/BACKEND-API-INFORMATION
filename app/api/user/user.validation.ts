import { body } from "express-validator";

export const createUser = [
  body("email")
    .notEmpty().withMessage("email is required")
    .isEmail().withMessage("email must be valid"),
  
  body("phone")
    .notEmpty().withMessage("phone is required")
    .isString().withMessage("phone must be a string"),

  body("password_hash")
    .notEmpty().withMessage("password_hash is required")
    .isString().withMessage("password_hash must be a string"),

  body("email_verified")
    .optional()
    .isBoolean().withMessage("email_verified must be a boolean"),

  body("phone_verified")
    .optional()
    .isBoolean().withMessage("phone_verified must be a boolean"),

  body("season")
    .optional()
    .isString().withMessage("season must be a string"),

  body("status")
    .optional()
    .isString().withMessage("status must be a string"),
];

export const updateUser = [
  body("email")
    .notEmpty().withMessage("email is required")
    .isEmail().withMessage("email must be valid"),

  body("phone")
    .notEmpty().withMessage("phone is required")
    .isString().withMessage("phone must be a string"),

  body("password_hash")
    .notEmpty().withMessage("password_hash is required")
    .isString().withMessage("password_hash must be a string"),

  body("email_verified")
    .optional()
    .isBoolean().withMessage("email_verified must be a boolean"),

  body("phone_verified")
    .optional()
    .isBoolean().withMessage("phone_verified must be a boolean"),

  body("season")
    .optional()
    .isString().withMessage("season must be a string"),

  body("status")
    .optional()
    .isString().withMessage("status must be a string"),
];

export const editUser = [
  body("email")
    .optional()
    .isEmail().withMessage("email must be valid"),

  body("phone")
    .optional()
    .isString().withMessage("phone must be a string"),

  body("password_hash")
    .optional()
    .isString().withMessage("password_hash must be a string"),

  body("email_verified")
    .optional()
    .isBoolean().withMessage("email_verified must be a boolean"),

  body("phone_verified")
    .optional()
    .isBoolean().withMessage("phone_verified must be a boolean"),

  body("season")
    .optional()
    .isString().withMessage("season must be a string"),

  body("status")
    .optional()
    .isString().withMessage("status must be a string"),
];
