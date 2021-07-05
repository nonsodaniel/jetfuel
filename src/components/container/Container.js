import React from "react";
import Header from "../header/Header";
import AlertBar from "../layouts/AlertBar";
import Footer from "../layouts/Footer";
import Orders from "../orders/Orders";
import "./Container.scss";

const Container = () => {
  return (
    <div className="container">
      <Header />
      <AlertBar />
      <Orders />
      <Footer />
    </div>
  );
};

export default Container;
