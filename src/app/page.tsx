import Image from "next/image";
import bg from "../../public/images/bg.png";
import phone from "../../public/images/iPhone 13 Pro.png";
import { Button, Input } from "@nextui-org/react";

export default function Home() {
  return (
    <main
      className="relative flex justify-center h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      {/* Your content goes here */}
      <div className="text-center mt-64 text-white">
        <h1 className="text-4xl font-bold text-black">
          Your financial future starts{" "}
          <span className="text-[#5136C1]">here</span>
        </h1>
        <p className="mt-4 text-lg text-black">
          Reserve your spot on our waitlist for exclusive access to Rahapay.
          Join us and reap benefits
        </p>

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
      </div>

      <div className="absolute bottom-0 right-0 ">
        <Image src={phone} alt="phone" width={450} height={50} />
      </div>
    </main>
  );
}
