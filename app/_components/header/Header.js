// "use client";

import Logo from "./Logo";
import ThemeSwitch from "./ThemeSwitch";
import Navigation from "../../Navigation";
import Container from "../utils/Container";

export default function Header() {
  return (
    <header className='  shadow-custom'>
      <Container>
        <div className='  flex items-center justify-between py-3 '>
          <div className=' flex items-center justify-center'>
            <Logo />
            <ThemeSwitch />
          </div>
          <div>
            <Navigation />
          </div>
        </div>
      </Container>
    </header>
  );
}
