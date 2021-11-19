import React from "react";
import "antd/dist/antd.css";
import "./index.css";

export default function Header() {
  const path = window.location.pathname.split("/")[1];
  return (
      <div className="header">
        <div className="logo">
          <a href="/">
            <img className="logo_img" src={"/img/logo.png"} alt=""/>
          </a>
        </div>
        <div className="nav">
          <ul>
            <li className={path === "home" ? "active" : "unActive"}>
              <a href="/home">首页</a>
              <div className="nav_line"></div>
            </li>
            <li className={path === "education" ? "active" : "unActive"}>
              <a href="/education">奥运知识</a>
              <div className="nav_line"></div>
            </li>
            <li className={path === "project" ? "active" : "unActive"}>
              <a href="/project">奥运项目</a>
              <div className="nav_line"></div>
            </li>
            <li className={path === "stars" ? "active" : "unActive"}>
              <a href="/stars">奥运明星</a>
              <div className="nav_line"></div>
            </li>
            <li className={path === "mascot" ? "active" : "unActive"}>
              <a href="/mascot">奥运吉祥物</a>
              <div className="nav_line"></div>
            </li>
          </ul>
        </div>
        <div className="slogan">
          <a href="/">
            <img className="slogan_img" src={"/img/slogan.png"} alt=""/>
          </a>
        </div>
      </div>
  );
}
