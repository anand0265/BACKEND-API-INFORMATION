
import { Router } from "express";
import { catchError } from "../../common/middleware/cath-error.middleware";
import * as userController from "./user.controller";
import * as userValidator from "./user.validation";
import { upload } from "../../common/middleware/multer.middleware";

const router = Router();

router
  .get('/email',catchError,userController.getUserByEmail)

  .get('/phone',catchError,userController.getUserByPhone)
  // GET all users
  .get("/", catchError, userController.getAllUser)

  // GET user by ID
  .get("/:id", catchError, userController.getUserById)

  // DELETE user
  .delete("/:id", catchError, userController.deleteUser)



  // CREATE user
  .post(
    "/",
    upload.none(),                       
    userValidator.createUser,            
    catchError,
    userController.createUser
  )

  // LOGIN user
  .post(
    "/login",
    upload.none(),                                
    catchError,
    userController.loginUser
  )

  // UPDATE user completely (PUT)
  .put(
    "/:id",
    upload.none(),
    userValidator.updateUser,
    catchError,
    userController.updateUser
  )

  // EDIT user partially (PATCH)
  .patch(
    "/:id",
    upload.none(),
    userValidator.editUser,
    catchError,
    userController.editUser
  );

 
  


export default router;
