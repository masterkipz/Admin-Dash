import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import HomeContent from "./Content/HomeContent";
import Side from "./Side";

const Home = () => {
  return (
    <div className="main-container">
      <Side />
      <Header />
      <HomeContent />
      <Footer />
    </div>
  );
};

export default Home;
