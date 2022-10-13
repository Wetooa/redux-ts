import { useAppDispatch, useAppSelector } from "../features/hooks";
import CartItem from "./CartItem";
import { CartItemsProps } from "../cartItems";
import { useEffect } from "react";
import { calculateTotals } from "../features/cart/cartSlice";
import { toggleModal } from "../features/modal/modalSlice";

function CartContainer() {
  const { cartItems, amount, total } = useAppSelector((store) => store.cart);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartItems]);

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
              {/* limiting float decimals */}
              total <span>${total.toFixed(2)}</span>
            </h4>
          </div>
          <button
            className="btn clear-btn"
            onClick={() => dispatch(toggleModal())}
          >
            clear cart
          </button>
        </footer>
      </header>
    </section>
  );
}
export default CartContainer;
