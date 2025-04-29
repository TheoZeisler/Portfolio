import Nav from "./nav";
import { useRef } from "react";

export function Header({ sectionsRef }) {
  const headerRef = useRef(null);
  return (
    <header ref={headerRef} className="fixed top-0 w-full z-50 bg-bgCustom">
      <Nav sectionsRef={sectionsRef} headerRef={headerRef} />
    </header>
  );
}
