import { javaAPI } from "./config";
const user = JSON.parse(localStorage.getItem("user"));
export const fetchLogin = async (data) => {
  return await javaAPI.post("/public/signin", data);
};
export const fetchUserProfile = async () => {
  console.log(user);
  return await javaAPI.get(`/user/customer/${user.userId}`);
};
export const getUserInfor = async (id) => {
  return await javaAPI.get(`/user/customer/${id}`);
};
