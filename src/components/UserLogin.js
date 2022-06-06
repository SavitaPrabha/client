//
import React, { useState } from "react";
import { Col } from "react-bootstrap";
import { Row } from "reactstrap";
import { Link } from "react-router-dom";
import "./UserLogin.css";
const UserLogin = () => {
  
  const [userRegisteration, setUserRegistration] = useState({
    email: "",
    password: "",
  });
  const [records, setRecords] = useState([]);
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    setUserRegistration({ ...userRegisteration, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecord = {
      ...userRegisteration,
      id: new Date().getTime().toString(),
    };
    setRecords([...records, newRecord]);
    console.log(records);

    setUserRegistration({
      email: "",
      password: "",
      confirmpassword: "",
      firstName: "",
      lastname: "",
      designation: "",
       mobile: "",
      degree: "",
      institute: "",
    });
  };

  
  
  return (
    <>
      <div className="container multiple_inputs">
        <h1>Registration</h1>
        <form action="" onSubmit={handleSubmit}>
          <Row>
            {/* <Col md={6}>
              <span>
                <div>
                  <label htmlFor="username">Email</label>
                  <input
                    type="email"
                    value={userRegisteration.email}
                    onChange={handleInput}
                    autoComplete="off"
                    name="email"
                    id="email"
                  />
                </div>
              </span>
            </Col>
            <Col md={6}>
              <span>
                <div>
                  <label htmlFor="OTP">OTP</label>
                  <input
                    type="otp"
                    value={userRegisteration.otp}
                    onChange={handleInput}
                    autoComplete="off"
                    name="otp"
                    id="otp"
                  />
                </div> 
              </span>
            </Col>*/}

           
            <Row>
              <Col md={6}>
                <span>
                  <div>
                    <label htmlFor="First Name">First Name</label>
                    <input
                      type="firstName"
                      value={userRegisteration.firstName}
                      onChange={handleInput}
                      autoComplete="off"
                      name="firstName"
                      id="firstName"
                    />
                  </div>
                </span>
              </Col>
              <Col md={6}>
                <span>
                  <div>
                    <label htmlFor="Last Name">Last Name</label>
                    <input
                      type="lastname"
                      value={userRegisteration.lastname}
                      onChange={handleInput}
                      autoComplete="off"
                      name="lastname"
                      id="lastname"
                    />
                  </div>
                </span>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <span>
                  <div>
                    <label htmlFor="username">Designation</label>
                    <input
                      type="designation"
                      value={userRegisteration.designation}
                      onChange={handleInput}
                      autoComplete="off"
                      name="designation"
                      id="designation"
                    />
                  </div>
                </span>
              </Col>
              <Col md={6}>
                <span>
                  <div>
                    <label htmlFor="username">Mobile Number</label>
                    <input
                      type="mobile"
                      value={userRegisteration.number}
                      onChange={handleInput}
                      autoComplete="off"
                      name="mobile"
                      id="mobile"
                    />
                  </div>
                </span>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <span>
                  <div>
                    <label htmlFor="Degree">Degree</label>
                    <input
                      type="degree"
                      value={userRegisteration.degree}
                      onChange={handleInput}
                      autoComplete="off"
                      name="degree"
                      id="degree"
                    />
                  </div>
                </span>
              </Col>
              <Col md={6}>
                <span>
                  <div>
                    <label htmlFor="Institute">Institute</label>
                    <input
                      type="institute"
                      value={userRegisteration.institute}
                      onChange={handleInput}
                      autoComplete="off"
                      name="institute"
                      id="institute"
                    />
                  </div>
                </span>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <span>
                  {" "}
                  <div>
                    <label htmlFor="Password">Password</label>
                    <input
                      type="password"
                      value={userRegisteration.password}
                      onChange={handleInput}
                      autoComplete="off"
                      name="password"
                      id="password"
                      required="true"
                    />
                  </div>
                </span>
              </Col>
              <Col md={6}>
                <span>
                  <div>
                    <label htmlFor="Confirm Password">Confirm Password</label>
                    <input
                      type="password"
                      value={userRegisteration.confirmpassword}
                      onChange={handleInput}
                      autoComplete="off"
                      name="confirmpassword"
                      id="confirmpassword"
                      required="true"
                    />
                  </div>
                </span>
              </Col>
            </Row>
          </Row>
          <button type="submit" className="btn btn-warning">
            REGISTER
          </button>
        </form>
      </div>
      <div>
        {records.map((curElem) => {
          const {
            id,
            email,
            otp,
            password,
            confirmpassword,
            firstName,
            lastname,
            designation,
            mobile,
            degree,
            institute,
          } = curElem;
          return (
            <div className="showDataStyle" key={curElem}>
              <p>{curElem.email}</p>
              <p>{curElem.password}</p>
              <p>{curElem.confirmpassword}</p>
              <p>{curElem.firstName}</p>
              <p>{curElem.lastname}</p>
              <p>{curElem.designation}</p>
              <p>{curElem.mobile}</p>
              <p>{curElem.degree}</p>
              <p>{curElem.institute}</p>
            </div>
          );
        })}
      </div>
      <p className="login_button">
        Already Registered?<Link to="/UserReg">Login</Link>
      </p>
    </>
  );
};

export default UserLogin;
