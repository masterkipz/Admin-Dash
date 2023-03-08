import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import HelpContent from "./Content/HelpContent";
import Side from "./Side";

function Help() {
  return (
    <div className="main-container">
      <Side />
      <Header />
      <HelpContent />
      <Footer />
    </div>
  );
}

export default Help;
