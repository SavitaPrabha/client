import React, { useEffect, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { NavLink } from "reactstrap";
import LoginRegisterPage from "../Pages/FORMS/LoginRegisterPage";
import "./header.css";
import UserLogin from "./UserLogin";
function Header() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <Row>
      <div className="navbar-container">
        <Col md={4}>
          <div>
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <span>{`ONEBIGBIT`}</span>
            </Link>
          </div>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
        </Col>
        <Col md={4}>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                feeds
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/AboutUs"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Authors
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Approach"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Explore
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/ContactUs"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/ContactUs"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>
          </ul>
        </Col>
        <Col md={4}>
          {" "}
           <Button className="btn_style">
           <LoginRegisterPage/></Button>
        </Col>
      </div>
    </Row>
  );
}

export default Header;
