import { createNamespace } from "cls-hooked";
import { NextFunction } from "express";

const NAMESPACE_NAME = "thread-local-storage";

const session = createNamespace(NAMESPACE_NAME);

export const getTestQuery = (): string => session.get("testQuery");

type Data = { testQuery: string };

export const createLocalStorage = ({ testQuery }: Data, next: NextFunction) => {
  session.run(() => {
    session.set("testQuery", testQuery);
    next();
  });
};
