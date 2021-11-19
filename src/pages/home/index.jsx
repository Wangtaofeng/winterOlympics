import React from "react";
import Footer from "../../components/Home/Footer";
import Header from "../../components/Home/Header";
import HomeDetail from "../../components/HomeContent/HomeDetail";
import "./index.css";

export default function Home() {
  return (
    <div className="all">
      <div className="home_body">
        <Header />
        <HomeDetail />
        <Footer />
      </div>
    </div>
  );
}