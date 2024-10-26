import localFont from "next/font/local";
import "./globals.css";
import Footer from "./_components/Footer";
import NavHeader from "./_components/NavHeader";
import Wrapper from "./_components/Wrapper";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      className=""
      >
        <NavHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
