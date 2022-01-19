import { javaAPI } from "./config";

export const fetchLogin = async (data) => {
  // return await javaAPI.post("/public/signin", data);
  return { status: 200, data: { token: "001", role: "customer" } };
};
