import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import logo from "../../../public/images/logo.png";
import Link from "next/link";

function NavBar() {
  return (
    <nav className="flex items-center justify-between p-4 md:px-20 md:pt-9 w-full fixed top-0 left-0 z-50">
      <div className="flex items-center w-1/3 sm:w-auto">
        <Image src={logo} alt="Logo" width={150} height={50} />
      </div>
      <Button className="p-2 md:px-5 md:py-4 bg-[#000] hover:bg-[004] rounded-full text-sm sm:text-lg text-white">
        <Link
          href={"https://chat.whatsapp.com/CSLZVVw7UovDv65jhBA3DZ"}
          target="_blank"
          rel="noopener noreferrer"
        >
          Join Our Community
        </Link>
      </Button>
    </nav>
  );
}

export default NavBar;
