"use client";
import { useState } from "react";
import Image from "next/image";
import background from "../../public/images/background.png";
import heroImg from "../../public/images/heroImg.png";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import Loading from "./components/Loading";
import Modal from "./components/Modal";

interface User {
  email: string;
}

export default function Home() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Check if the email already exists
      const checkRes = await fetch(
        `https://rahapay-waitlist-default-rtdb.firebaseio.com/users.json`
      );
      const checkData = await checkRes.json();
      
      // Extract existing emails
      const existingEmails = Object.values(checkData).map(
        (user) => (user as User).email
      );
      
      if (existingEmails.includes(email)) {
        setMessage("You have already signed up for the waitlist.");
        setIsSuccess(false);
      } else {
        // If email does not exist, add to waitlist
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

        if (res.status === 200) {
          setMessage("Successfully added to waitlist!");
          setEmail("");
          setIsSuccess(true);
        } else {
          setMessage("Failed to join the waitlist. Please try again.");
          setIsSuccess(false);
        }
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
      setIsSuccess(false);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <main
      className="relative flex flex-col justify-between items-center md:px-14 lg:px-20 pt-28 sm:pt-36 h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${background.src})` }}
    >
      {loading && <Loading />}
      {message && (
        <Modal
          message={message}
          onClose={() => setMessage("")}
          isSuccess={isSuccess}
        />
      )}

      {/* Purple Overlay */}
      {/*<div className="absolute inset-0 bg-[#5136C1] opacity-20"></div>*/} 


      <div className="relative text-center text-white z-10 px-4 sm:px-0">
        <div className="w-full md:max-w-6xl lg:max-w-5xl mx-auto">
          <h1 className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black">
            The future of <span className="text-[#5136C1]">Bill Payments</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-black font-bricolage-grotesque text-center">
            Say Goodbye to Bill Hassles - Join the Waitlist Now and Be First to <br className="hidden sm:block" /> Simplify
            Your Finances!
          </p>
        </div>

        {/* Input Container */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-8"
        >
          <input
            type="email"
            required
            placeholder="Email Address"
            className="px-4 w-full md:w-1/2 sm:w-96 py-4 bg-white text-gray-600 rounded-xl outline-none focus:ring-2 focus:ring-[#5136C1] border-2 border-[]"
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
      </div>
      <div className="flex h-2/6 md:h-auto w-full sm:w-4/5 lg:w-3/5 px-5 md:p-0">
        <Image
          src={heroImg}
          alt="phone"
          layout="responsive"
          loading="lazy"
          quality={75}
          width={350}
          height={200}
          className=""
        />
      </div>

      </main>
  );
}
