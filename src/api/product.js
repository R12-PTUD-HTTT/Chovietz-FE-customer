import { cSharpAPI } from './config';

const user = JSON.parse(localStorage.getItem('user'));
//just test api
export async function getCustomer() {
  return await cSharpAPI.get('api/customer');
}
export async function addProductToCart(id, quantity) {
  return await cSharpAPI.get(
    `/ShoppingCart/InsertShopCartIdUser=${user.userId}&IdProduct=${id}&quantity=${quantity}`
  );
}
