import "./App.css";
import Homepage from "./pages/Homepage";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetails from "./components/ProductDetails";
import CartPage from "./components/CartPage";
function App() {
  return (
    <div className="px-2">
      <Router>
      <Navigation/>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/carts" element={<CartPage />} />
      <Route path="*" element={<h1 className="text-center">Page not Found!!</h1>}/>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
