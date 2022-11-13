import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./routs/Header";
import Portfolio from "./routs/Portfolio";
import About from "./routs/About";
import Blog from "./routs/Blog";


ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="header" element={<Header/>} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="about" element={<About data={"Mahasiswa Teknik Informatika dari Universitas Muhammadiyah Surakarta"}/>} />
        <Route path="blog" element={<Blog />} />
      </Route>
    </Routes>
  </Router>
)
