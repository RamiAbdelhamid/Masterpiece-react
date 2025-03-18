import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Shared/Navbar";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Footer from "./Component/Shared/Footer";
import Login from "./Pages/Login";
import Userprofile from "./Pages/Userprofile";
import Veterinarians from "./Pages/Veterinarians";
import Livevacc from "./Component/Livevacc";
import ProductDetails from "./Component/ui/ProductDetails";
import Checkout from "./Component/ui/Checkout";
import SignUp from "./Pages/SignUp";
import ProceedToPayment from "./Component/ui/ProceedToPayment";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Userprofile" element={<Userprofile />} />
        <Route path="/Veterinarians" element={<Veterinarians />} />
        <Route path="/Livevacc" element={<Livevacc />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/proceed-to-payment" element={<ProceedToPayment />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
