import { clearCart } from "../features/cart/cartSlice";
import { useAppDispatch } from "../features/hooks";
import { toggleModal } from "../features/modal/modalSlice";

function Modal() {
  const dispatch = useAppDispatch();
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>remove all items from your shopping cart?</h4>
        <div className="btn-container">
          <button
            type="button"
            className="btn confirm-btn"
            onClick={() => {
              dispatch(clearCart());
              dispatch(toggleModal());
            }}
          >
            confirm
          </button>
          <button
            type="button"
            className="btn clear-btn"
            onClick={() => dispatch(toggleModal())}
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
}
export default Modal;
