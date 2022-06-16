import React, { useEffect, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { NavLink } from "reactstrap";
import store from "store";
import swal from "sweetalert2";
import { postSubmitForm } from "../FormHelper/Forms_helper";
import { useNavigate } from "react-router-dom";
import LoginRegisterPage from "../Pages/FORMS/LoginRegisterPage";
import "./header.css";
import UserLogin from "./UserLogin";
function Header() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const navigate = useNavigate();
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
    if (user) {
      store.clearAll();
      navigate("/");
      window.location.reload();
    } else {
      showNotification("Logout Successful", "Error");
    }
  };
  function showNotification(message, type) {
    if (type === "Success") swal.fire(type, message, "success");
    else swal.fire(type, message, "error");
  }
  window.addEventListener("resize", showButton);
  return (
    <>
      <div className="container-fluid bg-danger">
        <div class="row">
          <div class="col-3 col-md-3">
            {" "}
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <div className="logo"><h4>{`ONEBIGBIT`}</h4></div>
            </Link>
          </div>
          <div class="col-6 col-md-6">
            {" "}
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  feeds
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Authors
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Explore
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div class="col-3 col-md-3">
            {user ? "Welcome" : ""}&nbsp; &nbsp;
            {user ? (
              user.first_name
            ) : (
              <Button className="btn_style">
                <LoginRegisterPage />
              </Button>
            )}
            &nbsp; &nbsp;
            {user && user ? (
              <Button
                color="success"
                onClick={() => {
                  handleLogout();
                }}
              >
                Logout
              </Button>
            ) : (
              ""
            )}
            &nbsp;&nbsp;
            {user && user ? (
              <Button color="success" href="/MyProfile">
                Profile
              </Button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
