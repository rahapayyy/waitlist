"use client";
import { useState } from "react";
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
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const res = await fetch(
        "https://rahapay-waitlist-default-rtdb.firebaseio.com/users.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );
      const data = await res.json();
      if (res.status === 200) {
        setMessage("Successfully added to waitlist!");
        setEmail("");
      } else {
        setMessage("Failed to join the waitlist. Please try again.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <main
      className="relative flex flex-col justify-center h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      {/* Purple Overlay */}
      <div className="absolute inset-0 bg-[#5136C1] opacity-20"></div>
      {/* Your content goes here */}
      <div className="relative text-center text-white z-10 px-4 sm:px-0">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-black">
            Your financial future starts{" "}
            <span className="text-[#5136C1]">here</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-black font-bricolage-grotesque">
            Reserve your spot on our waitlist for exclusive access to Rahapay.
            Join us and reap benefits
          </p>
        </div>

        {/* Input Container */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-6"
        >
          <input
            type="email"
            required
            placeholder="Email Address"
            className="px-4 w-full sm:w-96 py-4 bg-white text-gray-600 rounded-md shadow-2xl outline-none focus:ring-2 focus:ring-[#5136C1]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            type="submit"
            className="py-6 sm:py-7 px-6 bg-[#5136C1] text-white font-semibold rounded-md shadow-md hover:bg-[#5038af] transition duration-200 w-full sm:w-auto"
          >
            Get Early Access
          </Button>
        </form>
        {message && <p className="mt-4 text-black">{message}</p>}

        {/* Social Link */}
        <div className="mt-6 sm:mt-20 flex justify-center items-center space-x-4">
          <Link
            href={"https://twitter.com/raha_pay"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={x} alt="social icon x" width={30} height={30} />
          </Link>
          <Link
            href={"https://www.linkedin.com/company/rahapay/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={ig}
              alt="social icon instagram"
              width={30}
              height={30}
            />
          </Link>
          <Link
            href={"https://www.linkedin.com/company/rahapay/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={lin}
              alt="social icon linkedin"
              width={30}
              height={30}
            />
          </Link>
          <Link href={"/"} target="_blank" rel="noopener noreferrer">
            <Image src={wa} alt="social icon whatsapp" width={30} height={30} />
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 z-10 w-full max-w-[180px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[450px]">
        <Image
          src={phone}
          alt="phone"
          layout="responsive"
          width={450}
          height={537}
        />
      </div>
    </main>
  );
}
