import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import Modal from "./components/Modal";
import { useAppDispatch, useAppSelector } from "./features/hooks";
import { useEffect } from "react";
import { getCartItems } from "./features/cart/cartSlice";

function App() {
  const { isOpen } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCartItems("random"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
