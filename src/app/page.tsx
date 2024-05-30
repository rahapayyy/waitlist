import Image from "next/image";
import bg from "../../public/images/bg.png";
import phone from "../../public/images/iPhone 13 Pro.png";
import x from "../../public/svg/flowbite_x-solid.svg";
import ig from "../../public/svg/ri_instagram-fill.svg";
import lin from "../../public/svg/icomoon-free_linkedin.svg";
import wa from "../../public/svg/Group 3.svg";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function Home() {
  return (
    <main
      className="relative flex flex-col justify-center h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      {/* Your content goes here */}
      <div className="text-center  text-white">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-[50px] font-bold text-black">
            Your financial future starts{" "}
            <span className="text-[#5136C1]">here</span>
          </h1>
          <p className="mt-4 text-[20px] text-black font-bricolage-grotesque">
            Reserve your spot on our waitlist for exclusive access to Rahapay.
            Join us and reap benefits
          </p>
        </div>

        {/* Input Container */}
        <div className="flex items-center justify-center space-x-4 mt-6">
          <input
            type="email"
            placeholder="Email Address"
            className="px-4 w-96 py-4 bg-white text-gray-600 rounded-md shadow-2xl outline-none focus:ring-2 focus:ring-[#5136C1]"
          />
          <Button className="py-7 px-6 bg-[#5136C1] text-white font-semibold rounded-md shadow-md hover:bg-[#5038af] transition duration-200">
            Get Early Access
          </Button>
        </div>

        {/* Social Link */}
        <div className="flex space-x-4 justify-center items-center mt-20">
          <Link href={"/"}>
            <Image src={x} alt="" />
          </Link>
          <Link href={"/"}>
            <Image src={ig} alt="" />
          </Link>
          <Link href={"/"}>
            <Image src={lin} alt="" />
          </Link>
          <Link href={"/"}>
            <Image src={wa} alt="" />
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 ">
        <Image src={phone} alt="phone" width={450} height={50} />
      </div>
    </main>
  );
}
