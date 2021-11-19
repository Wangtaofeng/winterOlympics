import React from "react";
import Header from "../../components/Home/Header";
import Footer from "../../components/Home/Footer";
import StarImg from "../../components/StarImg";
import "./index.css";

export default function Stars() {
  return (
    <div className="all">
      <div className="home_body">
        <Header />
        <div className="stars_content">
          <StarImg />
        </div>
        <Footer />
      </div>
    </div>
  );
}
