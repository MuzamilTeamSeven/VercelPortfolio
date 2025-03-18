import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import Img1 from '../assets/img/Project-img-2.png';
import Img2 from '../assets/img/Project-img-3.png';
import Img3 from '../assets/img/Project-img-1.png';
import Img4 from '../assets/img/Project-img-4.png';
import Img5 from '../assets/img/Project-img-5.png';
import Img6 from '../assets/img/Project-img-6.png';
import Img7 from '../assets/img/Project-img-7.webp';
import Img8 from '../assets/img/Project-img-8.jpg';
import Img9 from '../assets/img/Project-img-9.webp';
import Img10 from '../assets/img/Project-img-10.webp';
import Img11 from '../assets/img/Project-img-11.webp';
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "MEAN Stack",
      imgUrl: Img3,
    },
    {
      title: "Business Startup",
      description: "Frontend Development",
      imgUrl: Img2,
    },
    {
      title: "Business Startup",
      description: "Full Stack Developer",
      imgUrl: Img1,
    },
    {
      title: "Business Startup",
      description: "MERN Stack Developer",
      imgUrl: Img4,
    },
    {
      title: "Business Startup",
      description: "Full Stack Developer",
      imgUrl: Img5,
    },
    {
      title: "Business Startup",
      description: "MEAN Stack Developer",
      imgUrl: Img6,
    },

  ];

  const projectSection2 = [
    {
      title: "Business Startup",
      description: "MEAN Stack",
      imgUrl: Img7,
    },

    {
      title: "Business Startup",
      description: "NEXTJS Frontend",
      imgUrl: Img8,
    },


  ];

  const projectSection3 = [
    {
      title: "Business Startup",
      description: "MEAN Stack",
      imgUrl: Img9,
    },
    {
      title: "Business Startup",
      description: "ReactJS",
      imgUrl: Img10,
    },
    {
      title: "Business Startup",
      description: "HTML, CSS, BootStrap",
      imgUrl: Img11,
    },


  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Explore a showcase of my latest projects, where creativity meets functionality. From sleek web designs to robust full-stack applications, each project highlights my expertise and passion for development.</p>
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
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            projectSection2.map((projectSection2, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...projectSection2}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                      <Row>
                          {
                            projectSection3.map((projectSection3, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...projectSection3}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
