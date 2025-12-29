"use client";

import React, { useEffect, useState } from "react";
import Preloader from "./Pre";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

function RootShell({ children }) {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
<<<<<<< C:\Users\Asus\Desktop\Portfolio\src\components\RootShell.js
        {children}
=======
        <main id="main-content">{children}</main>
>>>>>>> c:\Users\Asus\.windsurf\worktrees\Portfolio\Portfolio-1103aada\src\components\RootShell.js
        <Footer />
      </div>
    </>
  );
}

export default RootShell;
