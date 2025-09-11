
import Nav from "./components/Nav"
import MainPage from "./pages/main"
import Cart from "./pages/Cart"
import About from "./pages/About"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import Checkout from "./pages/Checkout"
import { CartProvider } from "./context/CartContext"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <CartProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </CartProvider>
    </Router>
  )
}

export default App
