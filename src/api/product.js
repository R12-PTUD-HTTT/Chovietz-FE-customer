import { cSharpAPI } from "./config";

//just test api
export async function getCustomer() {
  return await cSharpAPI.get("api/customer");
}
