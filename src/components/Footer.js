import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <div className="text-white footer-logo">
              <div>Muzamil</div>
              <div>Saleem</div>
            </div>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://github.com/MalickMuzamil" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/malik-muzamil/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://instagram.com/hafixmuzamil" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
            <p>All Rights Reserved by Muzamil Saleem</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
