import  { Routes,Route } from "react-router-dom";
import Home from "./pages/home";
import Checkout from "./pages/checkout";

const app =()=>{
    return(<>
    <Routes>

<Route path="/" element={<Home />} />
<Route path="/Checkout" element={<Checkout />} />
    </Routes>
    </>)

}

export default app;