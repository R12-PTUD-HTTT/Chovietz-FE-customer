import axios from "axios";
import qs from "query-string";
import { getToken } from "../utils/storageUtils";

const javaAPI = axios.create({
  baseURL:
    process.env.JAVA_BE_API || "https://chovietz-be-java.herokuapp.com/api/",
  mode: "cors",
  cache: "no-cache",
  credentials: "same-origin",
  redirect: "follow",
  referrer: "no-referrer",
  headers: {
    "Content-Type": "application/json",
  },
  paramsSerializer: (params) => qs.stringify(params),
});

javaAPI.interceptors.request.use((config) => {
  const access_token = getToken();
  config.headers.Authorization = `Bearer ${access_token}`;
  return config;
});

javaAPI.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return error.response?.data;
  }
);

const cSharpAPI = axios.create({
  baseURL:
    process.env.CSHARP_BE_API || "https://chovietz-be-csharp.herokuapp.com/",
  mode: "cors",
  cache: "no-cache",
  credentials: "same-origin",
  redirect: "follow",
  referrer: "no-referrer",
  headers: {
    "Content-Type": "application/json",
  },
  paramsSerializer: (params) => qs.stringify(params),
});

cSharpAPI.interceptors.request.use((config) => {
  const access_token = getToken();
  config.headers.Authorization = `Bearer ${access_token}`;
  return config;
});

cSharpAPI.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return error.response?.data;
  }
);

export { javaAPI, cSharpAPI };
