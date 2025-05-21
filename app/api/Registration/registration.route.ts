import { Router } from "express";
import { catchError } from "../../common/middleware/cath-error.middleware";
import * as registrationController from "./registration.controller";
import * as registrationValidator from "./registration.validation";
import { upload } from "../../common/middleware/multer.middleware";



const router = Router();

router
  .get("/",catchError,registrationController.getAllRegistration)

  
  .post('/',catchError,registrationController.createRegistration)

  .delete("/:id",catchError,registrationController.deleteRegistration)

   // UPDATE 
   .put(
    "/:id",
    upload.none(),
    registrationValidator.updateRegistration,
    catchError,
   registrationController.updateRegistration
  )

  // EDIT 
  .patch(
    "/:id",
    upload.none(),
    registrationValidator.editRegistration,
    catchError,
    registrationController.editRegistration
  );

  export default router;