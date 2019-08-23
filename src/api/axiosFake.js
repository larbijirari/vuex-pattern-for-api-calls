export default class StoreUtil {
  static fail = false;
  static get(url) {
    const successPromise = new Promise(resolve => {
      setTimeout(() => {
        const data = {
          data: [
            { name: "Oscar", breed: "Aegean" },
            { name: "Casper", breed: "Asian" },
            { name: "Simba", breed: "Bengal" },
            { name: "Felix", breed: "Chartreux" }
          ]
        };
        resolve(data);
      }, 2300);
    });
    const failPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const error = {
          error: {
            statusCode: 500,
            name: "Error",
            message: "read ETIMEDOUT",
            code: "ETIMEDOUT",
            errno: "ETIMEDOUT",
            syscall: "read",
            stack:
              "Error: read ETIMEDOUT\n    at exports._errnoException (util.js:1050:11)\n    at TCP.onread (net.js:582:26)"
          }
        };
        reject(new Error(error));
      }, 2000);
    });

    return StoreUtil.fail ? failPromise : successPromise;
  }
}
