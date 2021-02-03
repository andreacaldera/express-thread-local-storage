import { Router } from "express";

export const createPromiseMiddleware = () => {
  const router = Router();

  router.use(async (_req, _res, next) => {
    await Promise.resolve().then(() => next());
  });

  return router;
};
