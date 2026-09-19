import { ArrowUpRight, ArrowUp } from "react-bootstrap-icons";

export const Footer = () => (
  <footer className="siteFooter" id="contact">
    <div className="container">
      <div className="contactRow">
        <div>
          <p className="eyebrow">Have something in mind?</p>
          <h2>
            Let’s build something
            <br />
            <span>worth sharing.</span>
          </h2>
        </div>
        <a className="contactLink" href="mailto:jasonhsubusiness@gmail.com">
          Say hello <ArrowUpRight aria-hidden="true" />
        </a>
      </div>
      <div className="footerInner">
        <a className="brand footerBrand" href="#about">
          <img
            className="brandMark"
            src={`${process.env.PUBLIC_URL}/favicon.svg`}
            alt=""
          />
          <span>Jason Hsu</span>
        </a>
        <div className="footerLinks" aria-label="Social links">
          <a href="mailto:jasonhsubusiness@gmail.com">
            Email <ArrowUpRight aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/jasonhsu-/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn <ArrowUpRight aria-hidden="true" />
          </a>
          <a
            href="https://github.com/jasonhsu93"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
        <a className="backToTop" href="#about">
          Back to top <ArrowUp aria-hidden="true" />
        </a>
      </div>
      <p className="copyright">
        © {new Date().getFullYear()} Jason Hsu · Made with curiosity.
      </p>
    </div>
  </footer>
);
