import { Router } from "express";
import { catchError } from "../../common/middleware/cath-error.middleware";
import * as physicalController from "./physical.controller";
import * as physicalValidator from "./physical.validation";
import { upload } from "../../common/middleware/multer.middleware";

const router = Router();

router
  .get("/", catchError, physicalController.getAllPhysical)

  .get("/:id", catchError, physicalController.getPhysicalById)

  .post(
    "/",
    upload.none(),
    physicalValidator.createPhysical,
    catchError,
    physicalController.createPhysical
  )

  .delete("/:id", catchError, physicalController.deletePhysical)

  
  .put(
    "/:id",
    upload.none(),
    physicalValidator.updatePhysical,
    catchError,
    physicalController.updatePhysical
  )

 
  .patch(
    "/:id",
    upload.none(),
    physicalValidator.editPhysical,
    catchError,
    physicalController.editPhysical
  );

export default router;
