import localStorage from "cls-hooked";
import { NextFunction } from "express";

const { createNamespace } = localStorage;

const NAMESPACE_NAME = "compliance-internal-api";

const session = createNamespace(NAMESPACE_NAME);

export const getTestQuery = (): string => session.get("testQuery");

type Data = { testQuery: string };

export const createLocalStorage = ({ testQuery }: Data, next: NextFunction) => {
  session.run(() => {
    session.set("testQuery", testQuery);
    next();
  });
};
