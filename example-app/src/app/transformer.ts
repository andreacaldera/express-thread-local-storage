import { getTestQuery } from "./local-storage";
import { logger } from "./logger";

export const testTransformer = (data: string, testQuery: string): string => {
  logger.debug(`Test query from param ${testQuery}`);
  logger.debug(`Test query from thread local ${getTestQuery()}`);
  if (testQuery !== getTestQuery()) {
    logger.warn(
      `Thread local data is incorrect. Test query from param ${testQuery}. Test query from thread local ${getTestQuery()}`
    );
  } else {
    logger.debug("Thread local data is correct");
  }
  return `${data} transformed`;
};
