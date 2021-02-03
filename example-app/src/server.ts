import cors from "cors";
import express, { Express } from "express";
import helmet from "helmet";
import config from "../config.json";
import { createPromiseMiddleware } from "./app/promise-middleware";
import { createTestRouter } from "./app/router";
import { createTimeoutMiddleware } from "./app/timeout-middleware";

const app: Express = express();

app.set("json spaces", 4);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(createTimeoutMiddleware());
app.use(createPromiseMiddleware());

if (
  process.env.NODE_ENV === "development" ||
  config.NODE_ENV === "development"
) {
  // app.use(morgan("dev"));
  app.use(cors());
}

if (process.env.NODE_ENV === "production" || config.NODE_ENV === "production") {
  app.use(helmet());
}

app.use(createTestRouter());

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    _next: express.NextFunction
  ) => {
    return res.status(500).json({
      errorName: err.name,
      message: err.message,
      stack: err.stack || "no stack defined",
    });
  }
);

export default app;
