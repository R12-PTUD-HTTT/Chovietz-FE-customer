import { javaAPI,cSharpAPI } from "./config";

export const submitOrder = async (data) => {
  return await cSharpAPI.post("/order", data);
};
export const getOrderDetail = async (id) => {
  return await javaAPI.get(`public/order/${id}`);
};