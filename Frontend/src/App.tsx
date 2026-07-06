import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/home";
import Checkout from "./components/pages/checkout";
function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
  
  );
}

export default App;