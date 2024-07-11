
import type { Metadata } from "next";
import "./globals.css";
import Cursor from "./components/Ui/Cursor/Cursor";
import SmoothScroll from "./components/Ui/SmoothScroll/SmoothScroll";
import Notification from "./components/Ui/Toaster/Notification";
export const metadata: Metadata = {
  title: "personal-portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body>
        <Cursor/>
        <Notification/>
        <SmoothScroll>
        {children}
        </SmoothScroll>

      </body>
    </html>
  );
}
