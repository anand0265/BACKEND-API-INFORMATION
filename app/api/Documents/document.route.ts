import { Router } from "express";
import { catchError } from "../../common/middleware/cath-error.middleware";
import * as documentController from "./document.controller";
import * as documentValidator from "./document.validation";
import { upload } from "../../common/middleware/multer.middleware";

const router = Router();


const documentUploadFields = upload.fields([
  { name: 'photo', maxCount: 1 },
  { name: 'signature', maxCount: 1 },
  { name: 'x_marksheet', maxCount: 1 },
  { name: 'xii_marksheet', maxCount: 1 },
  { name: 'jee_scorecard', maxCount: 1 },
  { name: 'ews_certificate', maxCount: 1 },
  { name: 'domicile_certificate', maxCount: 1 },
]);

router
  .get("/", catchError, documentController.getAllDocuments)

  .get("/:id", catchError, documentController.getDocumentById)

  .post(
    "/",
    documentUploadFields,
    documentValidator.createDocument,
    catchError,
    documentController.createDocument
  )

  .delete("/:id", catchError, documentController.deleteDocument)

  .put(
    "/:id",
    documentUploadFields,
    documentValidator.updateDocument,
    catchError,
    documentController.updateDocument
  )

  .patch(
    "/:id",
    documentUploadFields,
    documentValidator.editDocument,
    catchError,
    documentController.editDocument
  );

export default router;
