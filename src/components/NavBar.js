import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Tech Stack", href: "#tech" },
  { label: "About", href: "#about" },
];

export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const onNavigate = () => setMenuOpen(false);

  return (
    <header className={`siteNav ${isScrolled ? "siteNavScrolled" : ""}`}>
      <div className="container siteNavInner">
        <a className="brand" href="#experience" onClick={onNavigate} aria-label="Go to Experience section">
          <span className="brandMark" aria-hidden="true">JH</span>
          <span className="brandName">Jason Hsu</span>
        </a>

        <nav className="navLinks" aria-label="Primary navigation">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} onClick={onNavigate}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="navActions">
          <a className="navCta" href="mailto:jasonhsubusiness@gmail.com">Let’s Talk</a>
          <button
            type="button"
            className="navMenuButton"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobileMenu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      <div id="mobileMenu" className={`mobileMenu ${menuOpen ? "open" : ""}`}>
        <div className="container mobileMenuInner">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} className="mobileMenuLink" href={item.href} onClick={onNavigate}>
              {item.label}
            </a>
          ))}
          <div className="mobileMenuDivider" />
          <a className="mobileMenuLink" href="https://www.linkedin.com/in/jasonhsu-/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a className="mobileMenuLink" href="https://github.com/jasonhsu93" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a className="mobileMenuLink" href="mailto:jasonhsubusiness@gmail.com">
            Email
          </a>
        </div>
      </div>
    </header>
  );
};
