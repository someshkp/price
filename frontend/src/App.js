import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import Otpform from "./components/Otpform";

function App() {
  const user = localStorage.getItem("token");
  return (
   <Routes>
     <Route exact path="/signup" element={<Signup/>}/>
     <Route exact path="/" element={<Login/>}/>
     <Route exact path="/reset-password" element={<Otpform/>}/>
      {user && <Route exact path="/home" element={<Home/>}/>} 
      
        <Route exact path="/products" element={<Products/>}/>
        <Route exact path="/categories" element={<Categories/>}/>
      
   </Routes>
  );
}

export default App;
