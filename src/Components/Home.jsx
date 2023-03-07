import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import HomeContent from "./Content/HomeContent";

const Home = () => {
  return (
    <div className="main-container">
      <Header />
      <HomeContent />
      <Footer />
    </div>
  );
};

export default Home;
