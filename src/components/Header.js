import React, { useEffect, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { NavLink } from "reactstrap";
import store from "store";
import swal from "sweetalert2";
import { postSubmitForm } from "../FormHelper/Forms_helper"
import { useNavigate } from 'react-router-dom';
import LoginRegisterPage from "../Pages/FORMS/LoginRegisterPage";
import "./header.css";
import UserLogin from "./UserLogin";
function Header() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const navigate = useNavigate()
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [user, setUser] = useState(null);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    setUser(store.get("user1") ? store.get("user1") : null);
  }, []);

  useEffect(() => {
    showButton();
  }, []);

  const handleLogout = async (e, v) => {
    let url = "https://pqs3b4u48k.execute-api.ap-south-1.amazonaws.com/prod/students/logout";
    const response = await postSubmitForm(url, null);
    if (response && response.status === 1) {
      store.clearAll();
      navigate("/")
      window.location.reload();
    } else {
      showNotification(response.message, "Error");
    }

  };
  function showNotification(message, type) {
    if (type === "Success") swal.fire(type, message, "success");
    else swal.fire(type, message, "error");
  }
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

          {user ? "Welcome" :
            ""
          }&nbsp; &nbsp;
          {user ? user.first_name :
            <Button className="btn_style">
              <LoginRegisterPage /></Button>
          }
          &nbsp; &nbsp;
          {
            user && user ?
              <Button color="success" onClick={() => { handleLogout() }} >Logout</Button> : ""

          }

        </Col>
      </div>
    </Row>
  );
}

export default Header;
