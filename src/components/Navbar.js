import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import logo from '../asset/img/logo.svg';
import navIcon1 from '../asset/img/nav-icon1.svg';
import navIcon2 from '../asset/img/nav-icon2.svg';
import navIcon3 from '../asset/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import { MoonFill, SunFill } from 'react-bootstrap-icons';
import { useLocation, useNavigate } from 'react-router-dom';

function NavBar({ setMode, mode }) {

  const [activeLink, setActiveLink] = useState('home');
  const [Scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      if (Window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <div>
      <Navbar expand="lg" className={Scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#home">
            {/* <img src={Rohit} alt="logo" /> */}
            <h2>Rohit.</h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar_link' : 'navbar-Link'} onClick={() => { onUpdateActiveLink('home'); navigate('/') }}>Home</Nav.Link>
              <Nav.Link disabled={location.pathname !== '/'} href="#skills" className={activeLink === 'skills' ? 'active navbar_link' : 'navbar-Link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link disabled={location.pathname !== '/'} href="#projects" className={activeLink === 'projects' ? 'active navbar_link' : 'navbar-Link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="#"><img src={navIcon1} alt="" /></a>
                <a href="#"><img src={navIcon2} alt="" /></a>
                <a href="#"><img src={navIcon3} alt="" /></a>
              </div>
              <HashLink to='#connect'>
                <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
          <button className='mode' onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}>
            {mode === 'light' ? <MoonFill /> : <SunFill />}
          </button>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;