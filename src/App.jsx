import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/HomePages/Home";
import PlaceOrder from "./pages/OrderPlacePage/PlaceOrder";
import Cart from "./pages/CartPage/Cart";
function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="placeOrder" element={<PlaceOrder />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
