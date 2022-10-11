import { CartItemsProps } from "../cartItems";
import { useAppDispatch } from "../features/hooks";
import { ChevronDown, ChevronUp } from "../icons";
import { increment, decrement, removeItem } from "../features/cart/cartSlice";

function CartItem(item: CartItemsProps) {
  const { id, img, title, price, amount } = item;
  const dispatch = useAppDispatch();

  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>

        <button className="remove-btn" onClick={() => dispatch(removeItem(id))}>
          remove
        </button>
      </div>
      <div>
        <button className="amount-btn" onClick={() => dispatch(increment(id))}>
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button className="amount-btn" onClick={() => dispatch(decrement(id))}>
          <ChevronDown />
        </button>
      </div>
    </article>
  );
}
export default CartItem;
