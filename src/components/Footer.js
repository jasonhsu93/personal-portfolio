import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github-white-icon.webp";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <h1 style={{
              fontSize: '2rem', /* Adjust the font size */
              fontWeight: 'bold', /* Make the text bold */
              color: '#fff', /* Set the text color to white */
              margin: 0, /* Remove default margin */
              padding: 0, /* Remove default padding */
              transition: 'color 0.3s ease' /* Add a transition effect */
            }}>JH</h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/jasonhsu-/" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="" /></a>
              <a href="https://github.com/jasonhsu93" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="" /></a>
            </div>
            <p>Jason Hsu</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
