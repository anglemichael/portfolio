import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <p>
        &copy; {new Date().getFullYear()} <strong>Angel Biju</strong>. Built
        with React & Vite.
      </p>

      <nav className="social-links" aria-label="Social Media Links">
        <a href="mailto:angelbiju2327@gmail.com">
          Email
        </a>

        <a
          href="https://github.com/anglemichael"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/angel-biju-aa17b8386"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </nav>
    </footer>
  );
}

export default Footer;