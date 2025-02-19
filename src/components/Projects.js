import { Container, Row, Tab, Nav, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import projImg1 from "../asset/img/project-img1.png";
import projImg2 from "../asset/img/project-img2.png";
import projImg3 from "../asset/img/project-img3.png";
import colorSharp2 from "../asset/img/color-sharp2.png";
import projimg1 from "../asset/img/proj-img1.png";
import projimg2 from "../asset/img/proj-img2.png";
import projimg4 from "../asset/img/proj-img4.png";
import projimg5 from "../asset/img/proj-img5.jpg";
import projimg6 from "../asset/img/proj-img6.png";
import projimg7 from "../asset/img/proj-img7.png";
import projimg8 from "../asset/img/proj-img8.png";
import projimg9 from "../asset/img/proj-img9.png";
import projimg10 from "../asset/img/proj-img10.png";
// import projimg11 from "../asset/img/proj-img11.png";
import projimg12 from "../asset/img/proj-img12.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

function Projects() {

  const projects = [
    {
      title: "HRMS Application",
      description: "Designed and implemented a comprehensive (HRMS)Human Resource Management Application catering to the needs of HR professionals and administrators. ",
      imgUrl: projimg1,
      link: 'link.com',
      source: 'source.com',
      techs: ['React', 'React-Router-Dom', 'BootStrap', 'Redux']
    },
    {
      title: "Netflix Clone",
      description: "Developed an OTT platform like netflix which gives a real time ott experience and allows users to browse the posters and trailers.",
      imgUrl: projimg2,
      link: 'link.com',
      source: 'source.com',
      techs: ['React', 'React-Router-Dom', 'BootStrap', 'Redux']
    },
    {
      title: "Newsapp",
      description: "Developed a fully responsive news application which allows users to read news on a daily basis.",
      imgUrl: projImg3,
      link: 'link.com',
      source: 'source.com',
      techs: ['React', 'React-Router-Dom', 'BootStrap', 'Redux']
    },
    {
      title: "Youtube clone",
      description: "A real time video streaming platform which provides users with a youtube like experience",
      imgUrl: projimg4,
      link: 'link.com',
      source: 'source.com',
      techs: ['React', 'React-Router-Dom', 'BootStrap', 'Redux']
    },
    {
      title: "Weather App",
      description: " Weather App is a web application that allows users to check the current weather conditions and forecasts for their location or any other location worldwide. ",
      imgUrl: projimg5,
      link: 'link.com',
      source: 'source.com',
      techs: ['React', 'React-Router-Dom', 'BootStrap', 'Redux']
    },
    {
      title: "Tic-Tac-Toe Game",
      description: "The React Tic Tac Toe Game is a web-based version of the classic Tic Tac Toe game. ",
      imgUrl: projimg6,
      link: 'link.com',
      source: 'source.com',
      techs: ['React', 'React-Router-Dom', 'BootStrap', 'Redux']
    },
    {
      title: "Expense Tracker",
      description: "This application tracks the income and expenditure of the user",
      imgUrl: projimg7,
      link: ''
    },
    {
      title: "Text Editor",
      description: "This application allows users to edit  text files in real time.",
      imgUrl: projimg8,
      link: 'link.com',
      source: 'source.com',
      techs: ['React', 'React-Router-Dom', 'BootStrap', 'Redux']
    },
    {
      title: "Calculator",
      description: "This application allows users to perfform basic calculations.",
      imgUrl: projimg9,
      link: 'link.com',
      source: 'source.com',
      techs: ['React', 'React-Router-Dom', 'BootStrap', 'Redux']
    },
    {
      title: "Music Player",
      description: "Real time audio player which allows users to play music from local device",
      imgUrl: projimg10,
      link: 'link.com',
      source: 'source.com',
      techs: ['React', 'React-Router-Dom', 'BootStrap', 'Redux']
    },
    {
      title: "Video Player",
      description: "A real time video streaming application which allows users to stream videos from different platforms like YouTube,local device etc.",
      imgUrl: projimg10,
      link: 'link.com',
      source: 'source.com',
      techs: ['React', 'React-Router-Dom', 'BootStrap', 'Redux']
    },
    {
      title: "Analog Clock",
      description: "The Analog Clock JavaScript project creates a dynamic and visually appealing representation of time, mimicking the classic analog clock design.",
      imgUrl: projimg12,
      link: 'link.com',
      source: 'source.com',
      techs: ['React', 'React-Router-Dom', 'BootStrap', 'Redux']
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
                  {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod voluptate, dolorem quis cumque id eligendi nulla aliquid necessitatibus debitis dolore? Ut, odit reiciendis mollitia blanditiis repudiandae nisi rerum cum doloribus excepturi, repellat deserunt sapiente illum in dicta perferendis velit magnam.</p> */}
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.slice(0, 6).map((project, index) => { // Displaying first 6 projects
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
                      <Tab.Pane eventKey="second"> {/* Updated eventKey */}
                        <Row>
                          {
                            projects.slice(6, 12).map((project, index) => { // Filtering and displaying "Expense Tracker" project
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
                      <Tab.Pane eventKey="third">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
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

export default Projects;