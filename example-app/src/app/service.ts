import { createTestRepository } from "./repository";

export const createTestService = () => {
  const { testRepository } = createTestRepository();
  const testService = (testQuery: string) => {
    return `from service | ${testRepository(testQuery)}`;
  };

  return { testService };
};
