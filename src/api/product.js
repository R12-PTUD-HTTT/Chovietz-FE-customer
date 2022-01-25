import { cSharpAPI } from './config';

//just test api
export async function getCustomer() {
  return await cSharpAPI.get('api/customer');
}
export async function addProductToCart(id, quantity) {
  return await cSharpAPI.get(
    `/ShoppingCart/InsertShopCartIdUser=61e2a00631f2514657b67942&IdProduct=${id}&quantity=${quantity}`
  );
}
