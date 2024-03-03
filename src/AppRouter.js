import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import SignIn from "./Signin";
function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="todo" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
