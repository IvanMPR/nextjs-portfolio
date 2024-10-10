import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./_components/header/Header";
import Footer from "./_components/footer/Footer";

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
  description: 'Ivan Miceta, self taught web developer, located in Belgrade, Serbia. Portfolio, projects, skills, biography, contact.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${poppins.className} min-h-screen flex flex-col bg-bgColor dark:bg-bgColorDark text-textColor dark:text-textColorDark transition-all`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
