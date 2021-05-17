import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="pictures-icon-credits">
        <small>
          Picture by{" "}
          <a
            href="https://www.pexels.com/es-es/@harrisonhaines?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels"
            target="_blank"
            rel="noreferrer"
          >
            Harrison Haines
          </a>{" "}
          on{" "}
          <a href="https://www.pexels.com/" target="_blank" rel="noreferrer">
            Pexels
          </a>
          .
        </small>
        <small>
          Icons by{" "}
          <a href="https://www.flaticon.es/" target="_blank" rel="noreferrer">
            Flaticon
          </a>
          .
        </small>
      </div>
      <small className="made-by">Made by Nicolas Gasco.</small>
    </footer>
  );
}

export default Footer;
