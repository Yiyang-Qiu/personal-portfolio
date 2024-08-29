import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png"
import projImg1 from "../assets/img/reactIcon.png"
import "animate.css"
import TrackVisibility from "react-on-screen";

export const Projects = () => {

    const projects = [
        {
            title: "File Management System",
            description: "Springboot, Hibernate, JPA, ElasticSearch, Kafka",
            imgUrl: projImg1,
        },
        {
            title: "Distributed Hotel Search Engine System",
            description: "Elasticsearch, Kibana, SQL, Java, RestClient",
            imgUrl: projImg1,
        },
        {
            title: "High-Performance Student Information System",
            description: "Java, Spring Boot, JPA",
            imgUrl: projImg1,
        },
        {
            title: "Analyze and predict Customer Service Representative Calls",
            description: "Machine learning, models, python, cross validation",
            imgUrl: projImg1,
        },
    ];
    const projects2 = [
        {
            title: "Cloud-Based Car Rental Platform",
            description: "MySQL, Html, CSS, PHP, Ajax, Jquery",
            imgUrl: projImg1,
        },
        {
            title: "File Management System",
            description: "Springboot, Hibernate, JPA, ElasticSearch, Kafka",
            imgUrl: projImg1,
        },
    ];


    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Projects</h2>
                                    <p>👀Check projects I've done here!</p>
                                    <Tab.Container id='projects-tabs' defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab" defaultActivekey="first">
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
                                                        projects2.map((project, index) => {
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
                                            <Tab.Pane eventKey="third">Haven't decided what to put here...</Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col >
                </Row >
            </Container >
            <img className="background-image-right" src={colorSharp2} alt="background-image" />
        </section >
    )
}