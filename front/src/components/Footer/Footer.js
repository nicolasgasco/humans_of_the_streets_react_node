import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <small>Picture by <a href="https://www.pexels.com/es-es/@harrisonhaines?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels" target="_blank">Harrison Haines</a> on <a href="https://www.pexels.com/" target="_blank">Pexels</a>.</small>
      <small className="made-by">Made by Nicolas Gasco.</small>
    </footer>
  );
}

export default Footer;
