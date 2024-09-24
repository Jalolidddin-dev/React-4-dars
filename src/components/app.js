import React from "react";
import Header from "./shared/header";
import "./app.css";
import { Route, Routes } from "react-router-dom";
import About from "../pages/about";
import Blog from "../pages/blog";
import Footer from "./shared/footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
