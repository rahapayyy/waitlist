import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import logo from "../../../public/images/logo.png";

function NavBar() {
  return (
    <nav className="flex items-center justify-between p-4 w-full fixed top-0 left-0 z-50">
      <Image src={logo} alt="Logo" width={150} height={50} />
      <Button className="py-6 px-6 bg-[#000] text-white">
        Join Our Community
      </Button>
    </nav>
  );
}

export default NavBar;
