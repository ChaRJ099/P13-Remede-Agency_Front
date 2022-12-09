import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
// import SignIn from "../Pages/Sign-in";

function RoutesPath() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/Sign-in" element={<SignIn />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesPath;
