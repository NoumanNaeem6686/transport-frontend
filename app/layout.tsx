import "@/styles/globals.css";
import type { Metadata } from "next";
import { Providers } from "./providers";
import Navbar from "./_components/shared/Nav";
import Footer from "./_components/shared/Footer";
import { AOSProvider } from "./_utils/aox";
import Whatsapp from "./_components/Whatsapp";
import { NavigationBar } from "./_components/shared/Header";
export const metadata: Metadata = {
  title: "Transport",
  description: "Generated by Next.js",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body >
        <Providers >
          <AOSProvider>
            {/* <Navbar /> */}
            <NavigationBar />
            <div className="pt-10">
              {children}
            </div>
            <Footer />
            <Whatsapp />
          </AOSProvider>
        </Providers>
      </body>
    </html>
  );
}
