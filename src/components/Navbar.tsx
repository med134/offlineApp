import Link from "next/link";
import React from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: "400",
  style: ["italic"],
  subsets: ["latin"],
});

const Navbar = () => {
  return (
    <nav
      className={`${montserrat.className} flex justify-between px-16 items-center bg-primary h-12 text-light`}
    >
      <Link href="/" className="text-sizePc  hover:text-secondColor">
        {" "}
        Home
      </Link>
      <div className="flex justify-between items-center space-x-8">
        <Link href="/" className="text-sizePc  hover:text-secondColor">
          {" "}
          Materiels
        </Link>
        <Link href="/personnels" className="text-sizePc hover:text-secondColor">
          {" "}
          Personnelles
        </Link>
        <Link href="/" className="text-sizePc  hover:text-secondColor">
          {" "}
          Statistiques
        </Link>
        <Link href="/" className="text-sizePc  hover:text-secondColor">
          {" "}
          Vehicules
        </Link>
        <Link href="/" className="text-sizePc  hover:text-secondColor">
          {" "}
          Othres
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
