import { Router } from "express";

export const createTimeoutMiddleware = () => {
  const router = Router();

  router.use((_req, _res, next) => {
    setTimeout(next, 500);
  });

  return router;
};
