import { Link } from "react-router-dom";

import "./Footer.scss";

function Footer(props) {
  return (
    <footer className="footer">
      <div className="footer__row container">
        <div className="footer__col">
          <Link to="/" className="footer__link link">
            Название сайта
          </Link>
        </div>
        <div className="footer__col">
          <Link to="/" className="footer__link link">
            Название сайта
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
