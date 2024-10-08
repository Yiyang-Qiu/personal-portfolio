import { useState, useEffect } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/github.svg'
import navIcon3 from '../assets/img/leetcode.svg'
import logo from '../assets/img/black-and-white-svgrepo-com.svg'

//nav bar
export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    //设置下滑动态效果
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    {/* <img src={logo} alt="Logo" /> */}
                    <label>Yiyang Qiu</label>
                </Navbar.Brand>
                <Navbar.Toggle aria-control="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#project" className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item> 
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item> 
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> */}
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/yiyangqiu"><img src={navIcon1} alt="Linkedin"></img></a>
                            <a href="https://github.com/Yiyang-Qiu"><img src={navIcon2} alt="Github"></img></a>
                            <a href="https://leetcode.com/u/909842568qyy/"><img src={navIcon3} alt="Leetcode"></img></a>
                        </div>
                        <button className="vvd" onClick={() => console.log('connect')}>
                            <span>Let's Connect!</span>
                        </button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}