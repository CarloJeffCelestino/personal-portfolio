import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import projImg1 from "../assets/img/1.jpg";
import projImg2 from "../assets/img/2.jpg";
import projImg3 from "../assets/img/3.jpg";
import projImg4 from "../assets/img/4.jpg";
import projImg5 from "../assets/img/5.jpg";
import projImg7 from "../assets/img/7.jpg";
import projImg8 from "../assets/img/8.jpg";
import projImg9 from "../assets/img/9.jpg";
import projImg10 from "../assets/img/10.jpg";
import projImg11 from "../assets/img/11.jpg";
import projImg12 from "../assets/img/12.jpg";
import projImg13 from "../assets/img/13.jpg";
import projImg14 from "../assets/img/14.jpg";
import projImg15 from "../assets/img/15.jpg";
import projImg16 from "../assets/img/16.jpg";
import logo from "../assets/img/app_logo.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    { title: "Stork.ph", description: "", imgUrl: projImg1 },
    { title: "Stork.ph", description: "", imgUrl: projImg2 },
    { title: "Stork.ph", description: "", imgUrl: projImg3 },
    { title: "Stork.ph", description: "", imgUrl: projImg4 },
    { title: "Stork.ph", description: "", imgUrl: projImg5 },
    { title: "Stork.ph", description: "", imgUrl: projImg7 },
    { title: "Stork.ph", description: "", imgUrl: projImg8 },
    { title: "Stork.ph", description: "", imgUrl: projImg9 },
    { title: "Stork.ph", description: "", imgUrl: projImg10 },
    { title: "Stork.ph", description: "", imgUrl: projImg11 },
    { title: "Stork.ph", description: "", imgUrl: projImg12 },
    { title: "Stork.ph", description: "", imgUrl: projImg13 },
    { title: "Stork.ph", description: "", imgUrl: projImg14 },
    { title: "Stork.ph", description: "", imgUrl: projImg15 },
    { title: "Stork.ph", description: "", imgUrl: projImg16 },
  ];

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={20}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>
                    
                    <img src={logo} alt="Logo" style={{ width: "15%", height: "auto", marginLeft: "10px" }} />
                  </h2>
                  <Carousel responsive={responsive} infinite={true} className="project-slider">
                    {projects.map((project, index) => (
                      <div key={index} className="project-slide">
                        <img src={project.imgUrl} alt={project.title} style={{  width: "100%", height: "auto", padding: "10px", borderRadius: "10px"}} />
                      </div>
                    ))}
                  </Carousel>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  )
}
