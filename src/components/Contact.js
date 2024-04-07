import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/header-img.svg";
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }

  const constructMailtoLink = () => {
    const { message } = formDetails;
    const subject = "Inquiry";
    const body = message;
    return `mailto:carlocelestino3@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  const handleSendEmail = () => {
    const mailtoLink = constructMailtoLink();
    window.location.href = mailtoLink;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    // Send the email via API or perform any other necessary actions
    // For simplicity, I'm redirecting to Gmail directly
    handleSendEmail();
    setButtonText("Redirect");
    setStatus({ success: true, message: 'Message sent successfully. Check your email for confirmation.' });
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
          <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={contactImg} alt="Header Img"className="contact-img"/>
                </div>}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Contact Me</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} className="px-1">
                        <textarea rows="6" value={formDetails.message} placeholder="Please provide details about your inquiry here..." onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>
                    </Row>
                    {
                      status.message &&
                      <Row>
                        <Col>
                          <p className={status.success ? "success" : "danger"}>{status.message}</p>
                        </Col>
                      </Row>
                    }
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
