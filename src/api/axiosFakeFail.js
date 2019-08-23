export default class {
  static get(url) {
    return new Promise((resolve, reject) => {
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
  }
}
