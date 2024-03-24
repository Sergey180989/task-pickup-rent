import React from "react";
import "./MainLayout.css";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Loader } from "components/Loader/Loader";
import { Header } from "components/Header/Header";

const MainLayout = () => {
  return (
    <div className="layout">
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MainLayout;