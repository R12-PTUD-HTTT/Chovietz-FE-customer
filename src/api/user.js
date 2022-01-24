import { javaAPI } from "./config";
const user = JSON.parse(localStorage.getItem("user"));
export const fetchLogin = async (data) => {
  return await javaAPI.post("/public/signin", data);
};
export const fetchUserProfile = async () => {
  return await javaAPI.get(`/user/customer/${user.userId}`);
};
export const getUserInfor = async (id) => {
  return await javaAPI.get(`/user/customer/${id}`);
};
export const updateUserProfile = async (data) => {
  return await javaAPI.put(`/user/customer/${user.userId}`,data);
};
export const changePassword = async (data) => {
  return await javaAPI.put(`/user/customer/changepass/${user.userId}`,data);
};