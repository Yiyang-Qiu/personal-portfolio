import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg"
import meter2 from "../assets/img/meter2.svg"
import meter3 from "../assets/img/meter3.svg"
import colorSharp from "../assets/img/color-sharp.png"
import ny from "../assets/img/ny.jpg"

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>⬅️Left &nbsp;&nbsp;&nbsp;&nbsp; Right➡️</p>
                            {/* 以下的图片或者skills可以修改 */}
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={meter1} alt="image" />
                                    <h5>MySQL</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="image" />
                                    <h5>Springboot</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="image" />
                                    <h5>Java</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="image" />
                                    <h5>Implementation of Database</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} />
        </section>
    )

}