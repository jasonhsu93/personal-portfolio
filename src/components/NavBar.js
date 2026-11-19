import { useEffect, useRef, useState } from "react";
import { Envelope, List, X } from "react-bootstrap-icons";
import { contact, resumeUrl } from "../data/portfolio";

const sections = [{ label: "Work", href: "#projects" }, { label: "Experience", href: "#experience" }, { label: "About", href: "#about" }];

export function NavBar() {
  const [open, setOpen] = useState(false);
  const menuButton = useRef(null);
  useEffect(() => {
    if (!open) return undefined;
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    }
    const wide = window.matchMedia?.("(min-width: 641px)");
    const onResize = (event) => { if (event.matches) setOpen(false); };
    window.addEventListener("keydown", onKeyDown);
    wide?.addEventListener?.("change", onResize);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      wide?.removeEventListener?.("change", onResize);
    };
  }, [open]);

  return (
    <header className="masthead">
      <div className="wrap nav-inner">
        <a href="#top" className="brand" onClick={() => setOpen(false)} aria-label="Jason Hsu, back to top">
          <span className="monogram" aria-hidden="true">jh.</span>
          <span>Jason Hsu</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {sections.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}
          <a href={resumeUrl}>Résumé</a>
        </nav>
        <div className="nav-actions">
          <a className="contact-button" aria-label="Get in touch by email" href={`mailto:${contact.email}`}><Envelope aria-hidden="true" /><span>Get in touch</span></a>
          <button className="menu-toggle" type="button" ref={menuButton} aria-controls="mobileMenu" aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
            {open ? <X aria-hidden="true" /> : <List aria-hidden="true" />}
          </button>
        </div>
      </div>
      <nav id="mobileMenu" className="mobile-nav" aria-label="Mobile navigation" hidden={!open}>
        <div className="wrap">
          {sections.map((item) => <a href={item.href} key={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}
          <a href={resumeUrl} onClick={() => setOpen(false)}>Résumé</a>
        </div>
      </nav>
    </header>
  );
}
