// "use client";

import Logo from "./Logo";
import ThemeSwitch from "./ThemeSwitch";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header>
      <div>
        <Logo />
        <ThemeSwitch />
      </div>
      <div>
        <Navigation />
      </div>
    </header>
  );
}
