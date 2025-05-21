import { body } from "express-validator";

export const createDocument = [
  body("user_id")
    .notEmpty()
    .withMessage("user_id is required")
    .isInt()
    .withMessage("user_id must be an integer"),

  body("photo")
    .notEmpty()
    .withMessage("photo is required")
    .isBoolean()
    .withMessage("photo must be a boolean"),

  body("signature")
    .notEmpty()
    .withMessage("signature is required")
    .isBoolean()
    .withMessage("signature must be a boolean"),

  body("x_marksheet")
    .notEmpty()
    .withMessage("x_marksheet is required")
    .isBoolean()
    .withMessage("x_marksheet must be a boolean"),

  body("xii_marksheet")
    .notEmpty()
    .withMessage("xii_marksheet is required")
    .isBoolean()
    .withMessage("xii_marksheet must be a boolean"),

  body("jee_scorecard")
    .notEmpty()
    .withMessage("jee_scorecard is required")
    .isBoolean()
    .withMessage("jee_scorecard must be a boolean"),

  body("ews_certificate")
    .notEmpty()
    .withMessage("ews_certificate is required")
    .isBoolean()
    .withMessage("ews_certificate must be a boolean"),

  body("domicile_certificate")
    .notEmpty()
    .withMessage("domicile_certificate is required")
    .isBoolean()
    .withMessage("domicile_certificate must be a boolean"),

  body("status")
    .notEmpty()
    .withMessage("status is required")
    .isString()
    .withMessage("status must be a string"),
];

export const updateDocument = [...createDocument];

export const editDocument = [
  body("user_id")
    .optional()
    .isInt()
    .withMessage("user_id must be an integer"),

  body("photo")
    .optional()
    .isBoolean()
    .withMessage("photo must be a boolean"),

  body("signature")
    .optional()
    .isBoolean()
    .withMessage("signature must be a boolean"),

  body("x_marksheet")
    .optional()
    .isBoolean()
    .withMessage("x_marksheet must be a boolean"),

  body("xii_marksheet")
    .optional()
    .isBoolean()
    .withMessage("xii_marksheet must be a boolean"),

  body("jee_scorecard")
    .optional()
    .isBoolean()
    .withMessage("jee_scorecard must be a boolean"),

  body("ews_certificate")
    .optional()
    .isBoolean()
    .withMessage("ews_certificate must be a boolean"),

  body("domicile_certificate")
    .optional()
    .isBoolean()
    .withMessage("domicile_certificate must be a boolean"),

  body("status")
    .optional()
    .isString()
    .withMessage("status must be a string"),
];
