import { Row, Col, Nav, Tab } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png"
import projImg1 from "../assets/img/project-img1.png"

export const Projects = () => {

    const projects = [
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
                    <Col>
                        <h2>Projects</h2>
                        <p></p>
                        <Tab.Container id='projects-tabs' defaultActivekey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab One</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab Two</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab Three </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
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
                                <Tab.Pane eventKey="second">L I</Tab.Pane>
                                <Tab.Pane eventKey="third">L I</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col >
                </Row >
            </Container >
            <img className="background-img-right" src={colorSharp2} />
        </section >
    )
}