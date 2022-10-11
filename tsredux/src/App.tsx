import Navbar from "./components/Navbar";
import { useAppDispatch } from "./features/hooks";
import CartContainer from "./components/CartContainer";

function App() {
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
