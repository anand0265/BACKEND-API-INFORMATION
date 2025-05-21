
import express, { type Express, type Request, type Response } from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import http from "http";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";
import { initPassport } from "./app/common/services/passport-jwt.service";
const app: Express = express();
import passport  = require("passport");
import errorHandler from "./app/common/middleware/error-handler";

import routes from './app/routes';


dotenv.config();
initPassport();
app.use(passport.initialize());

const port = Number(process.env.PORT) || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));

const initApp = async (): Promise<void> => {
  app.use('/api', routes);

  const mediaPath = path.join(__dirname, "uploads");
  app.use("/uploads", express.static(mediaPath));

  app.get("/", (req: Request, res: Response) => {
    res.send({ status: "ok" });
  });


// app.use
app.use('/api',routes)


       // error handler
  app.use(errorHandler);
  http.createServer(app).listen(port, () => {
    console.log("Server is runnuing on port", port);
  });
};

void initApp();
