import axios from 'axios';

const generateCancellableAxiosInstance = () => {
  const axiosInstance = axios.create();

  let cancelToken;
  let shouldCancelOnRequest = false;

  axiosInstance.interceptors.request.use(
    config => {
      const { CancelToken } = axios;
      const source = CancelToken.source();
      if (shouldCancelOnRequest) {
        source.cancel();
        shouldCancelOnRequest = false;
      }
      config.cancelToken = source.token;
      cancelToken = source;

      return config;
    },
    error => {
      console.log({ error });
    },
  );

  axiosInstance.cancel = () => {
    if (cancelToken) {
      cancelToken.cancel();
    } else {
      shouldCancelOnRequest = true;
    }
  };
  return axiosInstance;
};

export default generateCancellableAxiosInstance;
