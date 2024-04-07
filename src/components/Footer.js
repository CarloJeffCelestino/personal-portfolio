import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center justify-content-center"> {/* Center align items */}
          <MailchimpForm />
       
          <Col xs={12} sm={10} className="text-center mt-3 mt-sm-0"> {/* Adjust size and add margin top */}
            <p>Contact</p>
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/carlo-jeff-campos-celestino-7a120526b/" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href="https://www.facebook.com/profile.php?id=100086261477330" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="Facebook" /></a>
              <a href="https://github.com/CarloJeffCelestino" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="GitHub" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
