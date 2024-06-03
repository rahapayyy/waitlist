import React from "react";
import Loader from "../../../public/svg/Spinner@1x-1.0s-200px-200px.svg";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
      <Image src={Loader} alt="Loading..." width={50} height={50} />
    </div>
  );
}
