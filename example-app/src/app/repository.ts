import { testTransformer } from "./transformer";

export const createTestRepository = () => {
  const testRepository = (testQuery: string) => {
    return testTransformer("from repo", testQuery);
  };

  return { testRepository };
};
