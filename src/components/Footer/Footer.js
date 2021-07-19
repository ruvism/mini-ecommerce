import logo from "../../assets/logo-footer.png";
import "./Footer.scss";

const Footer = () => {

    return (
        <div className="footer">
          <div className="footer__elements container">
            <figure className="footer__elements--logo">
                <img
                  alt="logo Centauro"
                  className="footer__logo"
                  src={logo}
                />
            </figure>           
          </div>
        </div>
    );
};
  
export default Footer;