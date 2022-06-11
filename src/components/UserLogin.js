//
import React, { useState, useEffect } from "react";
import csc from "country-state-city";
import { Col, Button } from "react-bootstrap";
import { Row } from "reactstrap";
import { Link } from "react-router-dom";
import "./UserLogin.css";
import { useNavigate } from 'react-router-dom';
import store from "store";
import swal from "sweetalert2";
import { postSubmitForm, postSubmitFormNoAuth } from "../FormHelper/Forms_helper"
const UserLogin = () => {

  const [user, setUser] = useState(null);
  const [email, setemail] = useState();
  const [firstName, setfirstName] = useState();
  const [lastName, setlastName] = useState();
  const [pwd, setpwd] = useState();
  const [degree, setdegree] = useState();
  const [designation, setdesignation] = useState();
  const [institute, setinstitute] = useState();
  const [mobile, setmobile] = useState();
  const [country, setCountry] = useState();
  const [allCountries, setAllCountries] = useState();
  const [countryCode, setCountryCode] = useState();
  const [highestDegree, sethighestDegree] = useState();
  const [isLoginOTP, setIsLoginOTP] = useState();
  const [referralCode, setReferralCode] = useState();

  const navigate = useNavigate()

  useEffect(() => {
    setAllCountries(csc.getAllCountries());

  }, []);

  const handleValidSubmit = async (e, v) => {
    e.preventDefault()
    let object = {

      first_name: firstName,
      last_name: lastName,
      email: email,
      pwd: pwd,
      degree: degree,
      highest_degree: highestDegree,
      designation: designation,
      institute: institute,
      mobile: mobile,
      country: country,
      country_code: countryCode,
      referral_code: referralCode

    }
    console.log(object);
    let url = "https://pqs3b4u48k.execute-api.ap-south-1.amazonaws.com/prod/students/register";
    const response = await postSubmitForm(url, object);

    if (response && response.status === 1) {
      showNotification(response.message, "Success");
      navigate("/UserDashboard")
      console.log(response);

      store.set("user1", response.data);
      setUser(store.get("user1") ? store.get("user1") : null);
      window.location.reload();

    } else {
      showNotification(response.message, "Error");
    }

  };

  function showNotification(message, type) {
    if (type === "Success") swal.fire(type, message, "success");
    else swal.fire(type, message, "error");
  }
  const handleSentOtp = async (e, v) => {

    setemail(email);
    let url = "https://pqs3b4u48k.execute-api.ap-south-1.amazonaws.com/prod/students/checkemail";
    const response = await postSubmitFormNoAuth(url, {

      email: email,

    });



    console.log(email);
    if (response && response.status === 1) {
      console.log(response);

      setIsLoginOTP(response.data.otp);
        

    } else {
      showNotification(response.message, "Error");
    }

  };


  return (
    <>
      <div className="container multiple_inputs">
        <h1>Registration</h1>
        <form action="" onSubmit={(e) => handleValidSubmit(e)}>
          <Row>
            <Col md={6}>
              <span>
                <div>
                  <label htmlFor="username">Email</label>
                  <input
                    type="email"
                    onChange={(e, v) => {
                      setemail(e.target.value);
                    }}

                    autoComplete="off"
                    name="email"
                    id="email"
                  />
                </div>
              </span>
            </Col>
            <Col md={2}>
              <span className="otp_btn"
                type="submit"
                onClick={(e) => handleSentOtp(e)}>Sent OTP</span>
              <span>
                <div>
                  <input
                    type="otp"
                    value={isLoginOTP}
                    autoComplete="off"
                    name="otp"
                    id="otp"
                  />
                </div>
              </span>
            </Col>
            <Col md={4}>

            </Col>


            <Row>
              <Col md={6}>
                <span>
                  <div>
                    <label htmlFor="First Name">First Name</label>
                    <input
                      type="first_name"
                      onChange={(e, v) => {
                        setfirstName(e.target.value);
                      }}
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
                      type="last_name"
                      onChange={(e, v) => {
                        setlastName(e.target.value);
                      }}
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
                      onChange={(e, v) => {
                        setdesignation(e.target.value);
                      }}
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
                      onChange={(e, v) => {
                        setmobile(e.target.value);
                      }}
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
                      type="text"
                      onChange={(e, v) => {
                        setdegree(e.target.value);
                      }}
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
                    <label htmlFor="highestDegree">Highest degree</label>
                    <input
                      type="text"
                      onChange={(e, v) => {
                        sethighestDegree(e.target.value);
                      }}
                      autoComplete="off"
                      name="highest_degree"
                      id="highest_degree"
                    />
                  </div>
                </span>
              </Col>
            </Row>

            <Row>
            <Col md={6}>
                <span>
                  <div>
                    <label htmlFor="Institute">Institute</label>
                    <input
                      type="institute"
                      onChange={(e, v) => {
                        setinstitute(e.target.value);
                      }}
                      autoComplete="off"
                      name="institute"
                      id="institute"
                    />
                  </div>
                </span>
              </Col>
              <Col md={6}>
                <span>
                  <div>
                    <label htmlFor="referralcode">Referral Code</label>
                    <input
                      type="text"
                      onChange={(e, v) => {
                        setReferralCode(e.target.value);
                      }}
                      autoComplete="off"
                      name="referral_code"
                      id="referral_code"
                    />
                  </div>
                </span>
              </Col>
            </Row>










            <Row>
              <Col md={6} className="mt-5">
                <span>
                  {" "}
                  <div>
                    <label htmlFor="country">Country</label>
                    <select

                      onChange={(e, v) => {
                        setCountry(e.target.value);
                      }}

                    >
                      <option value="">
                        -- Select Country --
                      </option>
                      {allCountries &&
                        allCountries.map((item) => {
                          return (
                            <option value={item.name}>{item.name}</option>
                          );
                        })}

                    </select>
                  </div>
                </span>
              </Col>
              <Col md={6}>
                <span>
                  <div>
                    <label htmlFor="country_code">Country Code</label>
                    <input
                      type="number"
                        onChange={(e, v) => {
                        setCountryCode(e.target.value);
                      }}
                      autoComplete="off"
                      name="country_code"
                      id="country_code"

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
                      onChange={(e, v) => {
                        setpwd(e.target.value);
                      }}
                      autoComplete="off"
                      name="pwd"
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
                      value={pwd}

                      autoComplete="off"
                      name="pwd"
                      id="confirmpassword"
                      required="true"
                    />
                  </div>
                </span>
              </Col>
            </Row>

          </Row>
          <button type="submit" className="register_btn">
            REGISTER
          </button>
        </form>
      </div>
      <div>

      </div>
      <p className="login_button">
        Already Registered?<Link to="/LoginRegisterPage">Login</Link>
      </p>
    </>
  );
};

export default UserLogin;
