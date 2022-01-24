import { cSharpAPI } from "./config";

export const submitOrder = async (data) => {
  return await cSharpAPI.post("/order", data);
};
