import Image from "next/image";
import bg from "../../public/images/bg.png";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <main
      className="relative flex items-center justify-center h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      {/* Your content goes here */}
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold text-black">
          Your financial future starts here
        </h1>
        <p className="mt-4 text-lg text-black">
          Reserve your spot on our waitlist for exclusive access to Rahapay.
          Join us and reap benefits
        </p>
      </div>
    </main>
  );
}
