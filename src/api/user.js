import { javaAPI } from "./config";

export const fetchLogin = async (data) => {
  return await javaAPI.post("/public/signin", data);
};
export const getUserInfor = async (id) => {
  return await javaAPI.get(`/user/customer/${id}`);
};
