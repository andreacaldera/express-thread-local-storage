import { Router } from "express";
// import { createLocalStorage, getThreadLocalData } from "../../../";
import {
  createLocalStorage,
  getThreadLocalData,
} from "express-thread-local-storage";
import { logger } from "./logger";
import { createTestService } from "./service";

// todo move
export type ThreadLocalData = {
  testQuery: string;
};

export const createTestRouter = () => {
  const router = Router();
  const { testService } = createTestService();

  router.use((req, _res, next) => {
    const testQuery = req.query.testQuery as string;
    createLocalStorage<ThreadLocalData>({ testQuery: testQuery }, next);
  });

  router.get("/test", async (req, res, next) => {
    const testQuery = req.query.testQuery as string;
    const {
      testQuery: threadLocalTestQuery,
    } = getThreadLocalData<ThreadLocalData>();
    logger.debug(
      `Data from thread local in next middleware ${threadLocalTestQuery}`
    );
    res.status(200).send({
      status: "test is up",
      data: testService(testQuery),
    });
  });

  return router;
};
