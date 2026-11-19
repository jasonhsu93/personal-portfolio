import { Envelope, Github, Linkedin } from "react-bootstrap-icons";
import { contact } from "../data/portfolio";

export function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="wrap footer-content">
        <div><h2>Get in touch<span>.</span></h2><a className="email-address" href={`mailto:${contact.email}`}><Envelope aria-hidden="true" />{contact.email}</a></div>
        <div className="footer-links"><a href={contact.github}><Github aria-hidden="true" />GitHub</a><a href={contact.linkedin}><Linkedin aria-hidden="true" />LinkedIn</a></div>
      </div>
      <div className="wrap footer-end"><span>© {new Date().getFullYear()} Jason Hsu</span><a href="#top">Back to top</a></div>
    </footer>
  );
}
