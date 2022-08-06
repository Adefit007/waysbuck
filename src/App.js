import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Homepage from "./pages/Homepage";
import NavbarUser from "./components/NavbarUser";
import NavbarLogin from "./components/NavbarLogin";
import { useState } from "react";
import NavbarAdmin from "./components/NavbarAdmin";
import Detail from "./pages/Detail";
import IncomeTransactions from "./pages/IncomeTransactions";
import AddProduct from "./pages/AddProduct";
import AddToping from "./pages/AddToping";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { dataProduct } from "./components/DataDummy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product/:id" element={<Detail data={dataProduct} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/add-toping" element={<AddToping />} />
        <Route path="/admin" element={<IncomeTransactions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
