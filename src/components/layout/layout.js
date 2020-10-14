import PropTypes from "prop-types";
import React from "react";

import Header from "./header";
import Footer from "./footer";

if (typeof window !== `undefined`) {
  console.log("%c Built & Managed     \n by GATSBOY          \n https://gatsboy.com ", "background: #062484; color: #fff; font-size: normal; padding: 10px;");
}

function Layout({ children }) {
  return (
    <div className="flex mx-auto flex-col min-h-screen bg-white font-lora-regular text-primary">
      <div className="bg-primary">
        <Header />
      </div>

      <main className="flex-1 w-full text-color bg-white">
        {children}
      </main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
