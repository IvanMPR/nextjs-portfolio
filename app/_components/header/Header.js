// "use client";

import Logo from "./Logo";
import ThemeSwitch from "./ThemeSwitch";
import Navigation from "../../Navigation";
import Container from "../utils/Container";

export default function Header() {
  return (
    <Container>
      <header className=' flex items-center justify-between py-5'>
        <div className=' flex items-center justify-center'>
          <Logo />
          <ThemeSwitch />
        </div>
        <div>
          <Navigation />
        </div>
      </header>
    </Container>
  );
}
