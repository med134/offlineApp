import Image from "next/image";
import React from "react";
import Logo from "../../public/images/assest/logo-protec-1.webp";

const Header = () => {
  return (
    <div className="bg-light w-screen pt-4 pb-4 h-18 flex justify-center items-center">
      <Image src={Logo} alt="logo" width={300} height={400} className="" />
    </div>
  );
};

export default Header;
