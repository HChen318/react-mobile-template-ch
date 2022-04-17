import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import List from "../pages/List";
import Test from "../pages/Test";

function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/list" element={<List />} />
        <Route path="/test/*" element={<Test />} />
        {/* <Route path="/test" element={<Test />} /> */}
        {/* <Route path="/test/one" element={<Test />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
