import shortid from "shortid";
import request from "superagent";

const hitEndpoint = async (): Promise<void> => {
  await request
    .get(`http://localhost:9090/test?testQuery=${shortid()}`)
    .catch((error: Error) => {
      console.error("load error", error);
    });
};

const keys = [...Array(100).keys()];

Promise.all(keys.map(hitEndpoint))
  .then(() => {
    console.log("load completed");
  })
  .catch((error) => {
    console.error("load error", error);
  });
