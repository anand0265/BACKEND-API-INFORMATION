import { Router } from "express";
import { catchError } from "../../common/middleware/cath-error.middleware";
import * as personalController from "./personal.controller";
import * as personalValidator from "./personal.validation";
import { upload } from "../../common/middleware/multer.middleware";

const router = Router();

router
  .get("/", catchError, personalController.getAllPersonalDetails)

  .get("/:id",catchError,personalController.getPersonalDetailsById)

  .post("/", catchError, personalController.createPersonalDetails)

  .delete("/:id", catchError, personalController.deletePersonalDetails)

  
  .put(
    "/:id",
    upload.none(),
    personalValidator.updatePersonalDetails,
    catchError,
    personalController.updatePersonalDetails
  )

 
  .patch(
    "/:id",
    upload.none(),
    personalValidator.editPersonalDetails,
    catchError,
    personalController.editPersonalDetails
  );

export default router;
