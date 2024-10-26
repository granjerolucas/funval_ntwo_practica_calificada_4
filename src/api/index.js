import axios from "axios";

export const addRequest = (url, method, options) => {
  const _controller = new AbortController();

  let req = new Promise((resolve, reject) => {
    axios({
      method,
      url,
      signal: _controller.signal,
      ...options,
    })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        if (err.code !== "ERR_CANCELED") {
          reject(err);
        }
      });
  });
  try {
  } catch (error) {}

  return {
    action: req,
    cancel: () => {
      _controller.abort();
    },
  };
};
