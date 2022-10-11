import { useAppSelector } from "../features/hooks";
import { CartIcon } from "../icons";

function Navbar() {
  const { amount } = useAppSelector((store) => store.cart);

  return (
    <nav>
      <div className="nav-center">
        <h3>redux toolkit</h3>
        <div className="nav-container">
          {/* the stylings of the icons such as the one below is in index.css */}
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
