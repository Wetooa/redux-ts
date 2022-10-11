import { CartItemsProps } from "../cartItems";

function CartItem(item: CartItemsProps) {
  return <div>{item.title}</div>;
}
export default CartItem;
