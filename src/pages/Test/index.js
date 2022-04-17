import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import One from "./One";

export default function Test() {
  return (
    <div>
      test page
      {/* 方式一 */}
      {/* <Outlet /> */}
      {/* 方式二 */}
      <Routes>
        <Route path="one" element={<One />} />
      </Routes>
    </div>
  );
}
