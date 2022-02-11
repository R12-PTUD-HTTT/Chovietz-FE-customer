import { javaAPI } from './config';
export const fetchLogin = async (data) => {
  return await javaAPI.post('/public/signin', data);
};
export const fetchUserProfile = async () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return await javaAPI.get(`/user/customer/${user.userId}`);
};
export const getUserInfor = async (id) => {
  return await javaAPI.get(`/user/customer/${id}`);
};
export const updateUserProfile = async (data) => {
  const user = JSON.parse(localStorage.getItem('user'));
  return await javaAPI.put(`/user/customer/${user.userId}`, data);
};
export const changePassword = async (data) => {
  const user = JSON.parse(localStorage.getItem('user'));
  return await javaAPI.put(`/user/customer/changepass/${user.userId}`, data);
};
export const SignUp = async (data) => {
  return await javaAPI.post(`/public/signup`, data);
};
