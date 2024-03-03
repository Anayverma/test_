import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "this is for test",
  description: "gen by one and only anay hehe",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>home header</div>
        {children}
        <div>home header</div>
      </body>
    </html>
  );
}
