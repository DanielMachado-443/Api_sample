import "reflect-metadata";
import { AppError } from "../../errors/AppError";
import { createConnection } from "typeorm";
import express, { NextFunction, Request, Response } from "express";
import { router } from "./routes";

createConnection();
const app = express();

app.use(express.json());
app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal server error${err.message}`,
    });
  }
);

export { app };