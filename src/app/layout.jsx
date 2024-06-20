import Navigation from "@components/navigation/navbar/index";
// import { Inter } from "next/font/google";
import { Cambay } from "next/font/google";
import "./globals.css";
import Provider from "@components/NextUIProvider";
const cambay = Cambay({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Cozy",
  description: "marketplace",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cambay.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
