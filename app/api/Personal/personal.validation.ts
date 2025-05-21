import { body } from "express-validator";

export const createPersonalDetails = [
  body("user_id")
    .notEmpty()
    .withMessage("user_id is required")
    .isInt()
    .withMessage("user_id must be an integer"),

  body("name")
    .notEmpty()
    .withMessage("name is required")
    .isString()
    .withMessage("name must be a string"),

  body("father_name")
    .notEmpty()
    .withMessage("father_name is required")
    .isString()
    .withMessage("father_name must be a string"),

  body("mother_name")
    .notEmpty()
    .withMessage("mother_name is required")
    .isString()
    .withMessage("mother_name must be a string"),

  body("dob")
    .notEmpty()
    .withMessage("dob is required")
    .isISO8601()
    .toDate()
    .withMessage("dob must be a valid date"),

  body("gender")
    .notEmpty()
    .withMessage("gender is required")
    .isString()
    .withMessage("gender must be a string"),

  body("nationality")
    .notEmpty()
    .withMessage("nationality is required")
    .isString()
    .withMessage("nationality must be a string"),

  body("category")
    .notEmpty()
    .withMessage("category is required")
    .isString()
    .withMessage("category must be a string"),

  body("caste")
    .notEmpty()
    .withMessage("caste is required")
    .isString()
    .withMessage("caste must be a string"),

  body("address")
    .notEmpty()
    .withMessage("address is required")
    .isString()
    .withMessage("address must be a string"),

  body("district")
    .notEmpty()
    .withMessage("district is required")
    .isString()
    .withMessage("district must be a string"),

  body("aadhaar")
    .notEmpty()
    .withMessage("aadhaar is required")
    .isString()
    .withMessage("aadhaar must be a string"),

  body("status")
    .notEmpty()
    .withMessage("status is required")
    .isString()
    .withMessage("status must be a string"),
];

export const updatePersonalDetails = [...createPersonalDetails];

export const editPersonalDetails = [
  body("user_id")
    .optional()
    .isInt()
    .withMessage("user_id must be an integer"),

  body("name")
    .optional()
    .isString()
    .withMessage("name must be a string"),

  body("father_name")
    .optional()
    .isString()
    .withMessage("father_name must be a string"),

  body("mother_name")
    .optional()
    .isString()
    .withMessage("mother_name must be a string"),

  body("dob")
    .optional()
    .isISO8601()
    .toDate()
    .withMessage("dob must be a valid date"),

  body("gender")
    .optional()
    .isString()
    .withMessage("gender must be a string"),

  body("nationality")
    .optional()
    .isString()
    .withMessage("nationality must be a string"),

  body("category")
    .optional()
    .isString()
    .withMessage("category must be a string"),

  body("caste")
    .optional()
    .isString()
    .withMessage("caste must be a string"),

  body("address")
    .optional()
    .isString()
    .withMessage("address must be a string"),

  body("district")
    .optional()
    .isString()
    .withMessage("district must be a string"),

  body("aadhaar")
    .optional()
    .isString()
    .withMessage("aadhaar must be a string"),

  body("status")
    .optional()
    .isString()
    .withMessage("status must be a string"),
];
