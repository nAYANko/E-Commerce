import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Shop } from "./Pages/Shop.jsx";
import ShopCategory from "./Pages/ShopCategory.jsx";
import { Product } from "./Pages/Product.jsx";
import { Cart } from "./Pages/Cart.jsx";
import { Login } from "./Pages/Login.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import goat_banner from "./Components/Assets/goat_banner.png";
import mid_banner from "./Components/Assets/mid_banner.png";
import dogwater_banner from "./Components/Assets/dogwater_banner.png";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/goats"
            element={<ShopCategory banner={goat_banner} category="goats" />}
          />
          <Route
            path="/mids"
            element={<ShopCategory banner={mid_banner} category="mids" />}
          />
          <Route
            path="/dogwater"
            element={
              <ShopCategory banner={dogwater_banner} category="dogwater" />
            }
          />
          <Route path="product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route>
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
