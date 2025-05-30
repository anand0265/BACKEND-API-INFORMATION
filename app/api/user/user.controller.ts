import * as userService from "./user.service";
import { createResponse } from "../../common/helper/response.helper";  
import asyncHandler from "express-async-handler";
import { type Request, type Response , type NextFunction} from "express";
import passport from "passport";
import { createUserTokens } from "../../common/services/passport-jwt.service";
import bcrypt from "bcrypt";
import { console } from "inspector";

const hashPassword = async (password: string) => {
  const hash = await bcrypt.hash(password, 12);
  return hash;
};

export const createUser = asyncHandler(async (req: Request, res: Response) => {
  req.body.password = await hashPassword(req.body.password);
  const result = await userService.createUser(req.body);
  res.send(createResponse(result, "User created sucssefully"));
});


export const loginUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body);
    passport.authenticate(
      "login",
      async (err: Error | null, user: any | undefined, info: any) => {
        if (err || !user) {
          return res.status(401).json({
            message: info?.message || "Authentication failed",
          });
        }

        console.log(user);
        const { accessToken } = createUserTokens(user);
        res.send(createResponse({ accessToken, user }, "Login successful"));
      }
    )(req, res, next); 
  }
);
//
export const updateUser = asyncHandler(async (req: Request, res: Response) => {
  
  if (typeof req.body.password !== "string" || req.body.password.length === 0) {
    res.status(400).send({ message: "Invalid password" });
    return;
  }

  req.body.password = await hashPassword(req.body.password); 

  const result = await userService.updateUser(Number(req.params.id), req.body);

  res.send(createResponse(result, "User updated successfully"));
});

//
export const editUser = asyncHandler(async (req: Request, res: Response) => {
  
  req.body.password = await hashPassword(req.body.password);

  const result = await userService.editUser(Number(req.params.id), req.body);
  
  res.send(createResponse(result, "User updated successfully"));
});

export const deleteUser = asyncHandler(async (req: Request, res: Response) => {
  const result = await userService.deleteUser(Number(req.params.id));
  res.send(createResponse(result, "User deleted sucssefully"));
});

export const getUserById = asyncHandler(async (req: Request, res: Response) => {
  const result = await userService.getUserById(Number(req.params.id));
  res.send(createResponse(result));
});

export const getAllUser = asyncHandler(async (req: Request, res: Response) => {
  const result = await userService.getAllUsers();
  res.send(createResponse(result));
});

export const getUserByEmail = asyncHandler(async (req: Request, res: Response) => {
  const result = await userService.getUserByEmail(req.body);
  res.send(createResponse(result));
})

export const getUserByPhone = asyncHandler(async (req: Request, res: Response) => {
  const result = await userService.getUserByPhone(req.body);
  res.send(createResponse(result));
})

 