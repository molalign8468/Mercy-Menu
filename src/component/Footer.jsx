import React from "react";

const dtatee = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="shadow-lg bg-black w-full py-2 text-center h-10 text-white bottom-0">
      @copy {dtatee} +251904351572 Mtech
    </footer>
  );
};

export default Footer;
