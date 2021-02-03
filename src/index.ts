import { createNamespace } from "cls-hooked";

const NAMESPACE_NAME = "thread-local-storage";

type Callback = () => void;

const session = createNamespace(NAMESPACE_NAME);

export const getThreadLocalData = <T>(): T => session.get("data");

export const createLocalStorage = <T>(data: T, next: Callback) => {
  session.run(() => {
    session.set("data", data);
    next();
  });
};
