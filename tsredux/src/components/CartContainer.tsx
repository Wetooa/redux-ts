import { useAppSelector } from "../features/hooks";
import CartItem from "./CartItem";
import { CartItemsProps } from "../cartItems";

function CartContainer() {
  const { cartItems, amount, total } = useAppSelector((store) => store.cart);

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">your cart is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
        <div>
          {cartItems.map((item: CartItemsProps) => {
            return <CartItem key={item.id} {...item} />;
          })}
        </div>
        <footer>
          <hr />
          <div className="cart-total">
            <h4>
              total <span>${total}</span>
            </h4>
          </div>
          <button className="btn clear-btn">clear cart</button>
        </footer>
      </header>
    </section>
  );
}
export default CartContainer;
