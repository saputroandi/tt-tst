import React from "react";
import Navbar from "../ui/navbar";

type Props = {
  children: React.ReactNode;
};

const RootLayout = (props: Props) => {
  return (
    <div>
      <Navbar />
      <div className="p-6">{props.children}</div>
      <div className="fixed w-screen h-screen top-0 left-0 -z-50">
        <img
          src="/assets/mobile-bg.png"
          alt=""
          className="md:hidden w-full h-full"
        />
        <img
          src="/assets/desktop-bg.png"
          alt=""
          className="sm:hidden md:block w-full h-full"
        />
      </div>
    </div>
  );
};

export default RootLayout;
