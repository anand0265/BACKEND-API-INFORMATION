import { Router } from "express";
import { catchError } from "../../common/middleware/cath-error.middleware";
import * as educationalController from "./educational.controller";
import * as educationalValidator from "./educational.validation";
import { upload } from "../../common/middleware/multer.middleware";

const router = Router();

router
  .get("/", catchError, educationalController.getAllEducational)

  .get("/:id", catchError, educationalController.getEducationalById)

  .post(
    "/",
    upload.none(),
    educationalValidator.createEducational,
    catchError,
    educationalController.createEducational
  )

  .delete("/:id", catchError, educationalController.deleteEducational)


  .put(
    "/:id",
    upload.none(),
    educationalValidator.updateEducational,
    catchError,
    educationalController.updateEducational
  )

 
  .patch(
    "/:id",
    upload.none(),
    educationalValidator.editEducational,
    catchError,
    educationalController.editEducational
  );

export default router;
