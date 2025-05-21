import { Router } from "express";
import { catchError } from "../../common/middleware/cath-error.middleware";
import * as paymentController from "./payment.controller";
import * as paymentValidator from "./payment.validation";
import { upload } from "../../common/middleware/multer.middleware";

const router = Router();

router
  .get("/", catchError, paymentController.getAllPayments)

  .get("/:id", catchError, paymentController.getPaymentById)

  .post("/", catchError, paymentController.createPayment)

  .delete("/:id", catchError, paymentController.deletePayment)

  // UPDATE payment completely (PUT)
  .put(
    "/:id",
    upload.none(),
    paymentValidator.updatePayment,
    catchError,
    paymentController.updatePayment
  )

  // EDIT payment partially (PATCH)
  .patch(
    "/:id",
    upload.none(),
    paymentValidator.editPayment,
    catchError,
    paymentController.editPayment
  );

export default router;
