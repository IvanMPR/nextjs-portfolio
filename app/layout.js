import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./_components/header/Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "Ivan's portfolio | %s",
    default: "Ivan's portfolio | Home",
  },
  // description: add description here,
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${poppins.className} min-h-screen`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
