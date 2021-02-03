# express-thread-local-storage

Easy to use thread-local storage for express.js
Enables you to use data within your express app without having to pass that around to your functions and without having to use res.locals.

## Usage

`yarn add express-thread-local-storage`

Add this to your middleware

```
import { createLocalStorage } from "express-thread-local-storage";
type YourData = unknown
router.use((req, _res, next) => {
    createLocalStorage<YourData>({ yourDataKey: 'yourDataValue' }, next);
});
```

Retrieve data

```
import { getThreadLocalData } from "express-thread-local-storage";
type YourData = unknown
const someFunction = () => {
    const { yourDataKey } = getThreadLocalData()
}
```

See example-app for a working example
