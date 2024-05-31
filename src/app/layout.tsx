import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import NavBar from "./components/NavBar";

const bricolage_grotesque = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "rahapay-waitlist",
  description: "Where convenience meets seamless bill payment",
  icons: "/icon.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={bricolage_grotesque.className}>
      <body>
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
