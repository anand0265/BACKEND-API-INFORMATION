import { body } from "express-validator";

export const createPhysical = [
  body("user_id")
    .notEmpty()
    .withMessage("user_id is required")
    .isInt()
    .withMessage("user_id must be an integer"),

  body("weight_kg")
    .notEmpty()
    .withMessage("weight_kg is required")
    .isInt()
    .withMessage("weight_kg must be an integer"),

  body("physical_defect")
    .notEmpty()
    .withMessage("physical_defect is required")
    .isString()
    .withMessage("physical_defect must be a string"),

  body("status")
    .notEmpty()
    .withMessage("status is required")
    .isString()
    .withMessage("status must be a string"),
];

export const updatePhysical = [...createPhysical];

export const editPhysical = [
  body("user_id")
    .optional()
    .isInt()
    .withMessage("user_id must be an integer"),

  body("weight_kg")
    .optional()
    .isInt()
    .withMessage("weight_kg must be an integer"),

  body("physical_defect")
    .optional()
    .isString()
    .withMessage("physical_defect must be a string"),

  body("status")
    .optional()
    .isString()
    .withMessage("status must be a string"),
];
