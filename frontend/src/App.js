import React from "react";
import { Routes,Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Register from "./Pages/Register"; 
import Login from "../src/Pages/Login"
function App() {
  return (
    <>
     <Navbar/> 
      <Routes>
        <Route path="/" element={<Home/>}/>
         <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>

    </>
  );
}

export default App;
