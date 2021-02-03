import { Router } from "express";
import { createLocalStorage, getTestQuery } from "express-thread-local-storage";
import { logger } from "./logger";
import { createTestService } from "./service";

export const createTestRouter = () => {
  const router = Router();
  const { testService } = createTestService();

  router.use((req, _res, next) => {
    const testQuery = req.query.testQuery as string;
    createLocalStorage({ testQuery: testQuery }, next);
  });

  router.get("/test", async (req, res, next) => {
    const testQuery = req.query.testQuery as string;
    logger.debug(`Data from thread local in next middleware ${getTestQuery()}`);
    res.status(200).send({
      status: "test is up",
      data: testService(testQuery),
    });
  });

  return router;
};
