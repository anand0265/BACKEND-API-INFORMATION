import { body } from "express-validator";

export const createEducational = [
  body("user_id")
    .notEmpty()
    .withMessage("user_id is required")
    .isInt()
    .withMessage("user_id must be an integer"),

  body("jee_application_no")
    .notEmpty()
    .withMessage("jee_application_no is required")
    .isString()
    .withMessage("jee_application_no must be a string"),

  body("jee_crl_rank")
    .notEmpty()
    .withMessage("jee_crl_rank is required")
    .isInt()
    .withMessage("jee_crl_rank must be an integer"),

  body("x_pass_year")
    .notEmpty()
    .withMessage("x_pass_year is required")
    .isInt()
    .withMessage("x_pass_year must be an integer"),

  body("xii_pass_year")
    .notEmpty()
    .withMessage("xii_pass_year is required")
    .isInt()
    .withMessage("xii_pass_year must be an integer"),

  body("english_marks")
    .notEmpty()
    .withMessage("english_marks is required")
    .isInt()
    .withMessage("english_marks must be an integer"),

  body("maths_marks")
    .notEmpty()
    .withMessage("maths_marks is required")
    .isInt()
    .withMessage("maths_marks must be an integer"),

  body("physics_marks")
    .notEmpty()
    .withMessage("physics_marks is required")
    .isInt()
    .withMessage("physics_marks must be an integer"),

  body("other_marks")
    .notEmpty()
    .withMessage("other_marks is required")
    .isInt()
    .withMessage("other_marks must be an integer"),

  body("total_marks")
    .notEmpty()
    .withMessage("total_marks is required")
    .isInt()
    .withMessage("total_marks must be an integer"),

  body("percentage")
    .notEmpty()
    .withMessage("percentage is required")
    .isFloat({ min: 0, max: 100 })
    .withMessage("percentage must be a number between 0 and 100"),

  body("status")
    .notEmpty()
    .withMessage("status is required")
    .isString()
    .withMessage("status must be a string"),
];

export const updateEducational = [...createEducational];

export const editEducational = [
  body("user_id")
    .optional()
    .isInt()
    .withMessage("user_id must be an integer"),

  body("jee_application_no")
    .optional()
    .isString()
    .withMessage("jee_application_no must be a string"),

  body("jee_crl_rank")
    .optional()
    .isInt()
    .withMessage("jee_crl_rank must be an integer"),

  body("x_pass_year")
    .optional()
    .isInt()
    .withMessage("x_pass_year must be an integer"),

  body("xii_pass_year")
    .optional()
    .isInt()
    .withMessage("xii_pass_year must be an integer"),

  body("english_marks")
    .optional()
    .isInt()
    .withMessage("english_marks must be an integer"),

  body("maths_marks")
    .optional()
    .isInt()
    .withMessage("maths_marks must be an integer"),

  body("physics_marks")
    .optional()
    .isInt()
    .withMessage("physics_marks must be an integer"),

  body("other_marks")
    .optional()
    .isInt()
    .withMessage("other_marks must be an integer"),

  body("total_marks")
    .optional()
    .isInt()
    .withMessage("total_marks must be an integer"),

  body("percentage")
    .optional()
    .isFloat({ min: 0, max: 100 })
    .withMessage("percentage must be a number between 0 and 100"),

  body("status")
    .optional()
    .isString()
    .withMessage("status must be a string"),
];
