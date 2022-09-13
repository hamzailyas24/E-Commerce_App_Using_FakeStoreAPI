import { Routes, Route } from "react-router-dom";
import Cart from "../pages/Cart";
import ProductDetails from "../pages/ProductDetails";
import Products from "../pages/Products";

function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/:productID" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default AppRouter;