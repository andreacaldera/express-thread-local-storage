import { getThreadLocalData } from "../../../";
import { logger } from "./logger";
import { ThreadLocalData } from "./router";

export const testTransformer = (data: string, testQuery: string): string => {
  logger.debug(`Test query from param ${testQuery}`);
  const {
    testQuery: threadLocalTestQuery,
  } = getThreadLocalData<ThreadLocalData>();
  logger.debug(`Test query from thread local ${threadLocalTestQuery}`);
  if (testQuery !== threadLocalTestQuery) {
    logger.warn(
      `Thread local data is incorrect. Test query from param ${testQuery}. Test query from thread local ${threadLocalTestQuery}`
    );
  } else {
    logger.debug("Thread local data is correct");
  }
  return `${data} transformed`;
};
