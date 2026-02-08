export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="siteFooter">
      <div className="container footerInner">
        <div className="footerBrand">
          <span className="brandMark brandMarkSmall" aria-hidden="true">JH</span>
          <div>
            <div className="footerName">Jason Hsu</div>
          </div>
        </div>

        <div className="footerLinks" aria-label="Social links">
          <a href="mailto:jasonhsubusiness@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/jasonhsu-/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/jasonhsu93" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>

        <div className="footerLegal">
          <span>© {year} Jason Hsu</span>
          <span className="footerDot" aria-hidden="true">•</span>
          <span className="muted">Privacy</span>
          <span className="footerDot" aria-hidden="true">•</span>
          <span className="muted">Terms</span>
        </div>
      </div>
    </footer>
  );
};
