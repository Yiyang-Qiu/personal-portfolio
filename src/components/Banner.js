import { useState, useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../assets/img/levi.png"
import "animate.css"
import TrackVisibility from "react-on-screen"
import { isVisible } from "@testing-library/user-event/dist/utils"

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Backend Developer", "Software Engineer", "Java Lover"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
            <Container className="align-items-center">
                <Row>
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className="tagline">Welcome to my Portfolio</span>
                                    <h1>{'Hi I\'m Yiyang Qiu '}<span className="wrap">{text}</span></h1>
                                    <p className="words">
                                        I am eager to secure an internship or full-time position where I can collaborate with industry professionals and contribute to impactful projects. While my academic experience has provided a solid foundation in software engineering, I am seeking to bridge the gap between theoretical knowledge and practical application. This opportunity would allow me to gain hands-on experience, enhance my teamwork skills, and apply my expertise in a real-world setting. I am committed to continuous learning and am excited about the prospect of contributing to and growing within a dynamic and innovative team.
                                    </p>
                                    <button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25}></ArrowRightCircle></button>
                                </div>
                            }
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Headder Img" />
                    </Col>

                </Row>
            </Container>
        </section>
    )
}