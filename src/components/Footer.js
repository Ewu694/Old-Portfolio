import "../styles/Footer.css";
import { Container } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";


function Footer(){
    return(
        <div className="footer">
            <Container>
                <div className="social-media-icons">
                    <a href = "mailto:ericwu694@gmail.com">
                        <FontAwesomeIcon icon = {faEnvelope} />
                    </a>
                    <a href = "https://www.instagram.com/e.wu1021/">
                        <FontAwesomeIcon icon = {faInstagram} />
                    </a>
                    <a href = "https://www.linkedin.com/in/eric-wu-a15157226/">
                        <FontAwesomeIcon icon = {faLinkedin} />
                    </a>
                    <a href = "https://github.com/Ewu694">
                        <FontAwesomeIcon icon = {faGithub} />
                    </a>
                </div>
            </Container>
            <p> &copy; WhilEric.com</p>
        </div>
    );
}

export default Footer;