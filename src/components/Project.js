import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/quiz_app1.png";
import projImg2 from "../assets/img/quiz_app2.png";
import projImg3 from "../assets/img/quiz_app3.png";
import projImg4 from "../assets/img/expense1.png";
import projImg5 from "../assets/img/expense2.png";
import projImg6 from "../assets/img/expense3.png";
import projImg7 from "../assets/img/auth1.png";
import projImg8 from "../assets/img/auth3.png";
import projImg9 from "../assets/img/auth4.png";
import projImg10 from "../assets/img/auth5.png";
import projImg11 from "../assets/img/auth6.png";
import projImg12 from "../assets/img/auth7.png";
import projImg13 from "../assets/img/auth8.png";
import projImg14 from "../assets/img/card.png";
import projImg15 from "../assets/img/card1.png";
import projImg16 from "../assets/img/card2.png";
import projImg17 from "../assets/img/card4.png";
import projImg18 from "../assets/img/card5.png";
import projImg19 from "../assets/img/card6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Project = () => {

  const projects = [
    {
      title: "Quiz App",
      description: "Start Screen",
      imgUrl: projImg1,
    },
    {
      title: "Quiz App",
      description: "Questions Screen",
      imgUrl: projImg2,
    },
    {
      title: "Quiz App",
      description: "Result Screen",
      imgUrl: projImg3,
    },
    {
      title: "Expense Tracker",
      description: "Expense Dashboard",
      imgUrl: projImg4,
    },
    {
      title: "Expense Tracker",
      description: "Add Expense",
      imgUrl: projImg5,
    },
    {
      title: "Expense Tracker",
      description: "Added Expense",
      imgUrl: projImg6,
    },
  ];

  const authProjects = [
    {
      title: "Authentication",
      description: "Login Screen",
      imgUrl: projImg7,
    },
    {
      title: "Authentication",
      description: "Validation",
      imgUrl: projImg9,
    },
    {
      title: "Authentication",
      description: "Registration Screen",
      imgUrl: projImg8,
    },
    {
      title: "Authentication",
      description: "Home Screen",
      imgUrl: projImg11,
    },
    {
      title: "Authentication",
      description: "Drawer",
      imgUrl: projImg12,
    },
    {
      title: "Authentication",
      description: "Setting Screen",
      imgUrl: projImg13,
    },
    {
      title: "Authentication",
      description: "Forgot Password",
      imgUrl: projImg10,
    },
  ];

  const cardProjects = [
    {
      title: "Bank",
      description: "Cover",
      imgUrl: projImg14,
    },
    {
      title: "Bank",
      description: "Cover",
      imgUrl: projImg15,
    },
    {
      title: "Bank",
      description: "Components",
      imgUrl: projImg16,
    },
    {
      title: "Bank",
      description: "wallet Screen",
      imgUrl: projImg17,
    },
    {
      title: "Bank",
      description: "Statistics Screen",
      imgUrl: projImg18,
    },
    {
      title: "Bank",
      description: "Home Screen",
      imgUrl: projImg19,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
             
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                   <Tab.Pane eventKey="first">
                   <p>This is the content for Tab 1. This project showcases a comprehensive banking application with various features like account management, transaction tracking, and financial analysis. Users can easily navigate through different screens to perform banking operations, view their transaction history, and monitor their financial activities.</p>
  
  <Row>
    {cardProjects.map((project, index) => (
      <ProjectCard key={index} {...project} />
    ))}
  </Row>
  
</Tab.Pane>
<Tab.Pane eventKey="second">
<p>This is the content for Tab 2. This project focuses on building a robust authentication system for web and mobile applications. It includes various authentication features such as user registration, login, password recovery, and account verification.</p>
  <Row>
    {authProjects.map((project, index) => (
      <ProjectCard key={index} {...project} />
    ))}
  </Row>
 
 
</Tab.Pane>
<Tab.Pane eventKey="third">
<p>This is the content for Tab 3. This project demonstrates the development of an interactive quiz application with engaging features for users to test their knowledge on various topics. The application offers a user-friendly interface with visually appealing designs and smooth animations.</p>
  <Row>
    {projects.map((project, index) => (
      <ProjectCard key={index} {...project} />
    ))}
  </Row>
  
  
</Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};
