import { AvField, AvForm } from 'availity-reactstrap-validation'
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import React, { useState, useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap'
import { Col, Modal, ModalBody, ModalFooter, ModalHeader, Row, Label } from 'reactstrap'
import { toast } from "react-toastify";
import store from "store";
import axios from "axios";
import swal from "sweetalert2";
// import GoogleLogin, { GoogleLogout } from 'react-google-login';
import { postSubmitFormNoAuth } from '../FormHelper/Forms_helper';

function RegisterLogin() {


    const [loginModal, setloginModal] = useState(false)
    const [isLoginOTP, setIsLoginOTP] = useState(null);
    const [mobile, setMobile] = useState(null);
    useEffect(() => {
        setUser(store.get("user") ? store.get("user") : null);
    }, []);
    const [user, setUser] = useState(null);
    const [isOtpTimer, setIsOtpTimer] = useState(false);

    const postSubmitForm = (url, data) => {
        const token = store.get("user") ? store.get("user").token : "";

        const config = {
            headers: { Authorization: token },
        };
        return axios
            .post(url, data, config)
            .then((response) => {
                if (response.status >= 200 || response.status <= 299)
                    return response.data;
                throw response.data;
            })
            .catch((err) => {
                var message;
                console.log(err);
                if (err.response && err.response.status) {
                    switch (err.response.status) {
                        case 404:
                            message = "Sorry! the page you are looking for could not be found";
                            break;
                        case 500:
                            message =
                                "Sorry! something went wrong, please contact our support team";
                            break;
                        case 401:
                            message = "Invalid credentials";
                            break;
                        default:
                            message = err[1];
                            break;
                    }
                }
                throw message;
            });
    };

    const startOtpTimer = (timer_type) => {
        let otpTimer = 60;
        setIsOtpTimer(true);
        const otp = setInterval(() => {
            if (otpTimer <= 0) {
                clearInterval(otp);
                setIsOtpTimer(false);
            } else {
                otpTimer -= 1;
                if (timer_type == "login") {
                    const elem = document.getElementById("loginOtpTimer");
                    if (elem) elem.innerText = otpTimer;
                } else if (timer_type == "register") {
                    const elem = document.getElementById("registerOtpTimer");
                    if (elem) elem.innerText = otpTimer;
                }
            }
        }, 1000);
    };
    const showNotification = (message, type) => {
        if (type === "Success") swal.fire(type, message, "success");
        else swal.fire(type, message, "error");
    }
    const handleRegister = async (e, v) => {

        let url = "https://api-lms.getdemos.in/students/register";

        const response = await postSubmitFormNoAuth(url, {
            mobile: v.mobile,
            email: v.email,
            name: v.name,
        });
        if (response.status === 1) {
            showNotification(response.message, "Success");
            store.set("user", response.data);
            setUser(store.get("user") ? store.get("user") : null);
            window.location.reload();

        } else {
            showNotification(response.message, "Error");
        }
    };
    const handleRegisterWithGoogle = async (e, v) => {

        let url = "https://api-lms.getdemos.in/students/logingoogle";

        const response = await postSubmitFormNoAuth(url, {

        });
        if (response.status === 1) {
            showNotification(response.message, "Success");
            store.set("user", response.data);
            setUser(store.get("user") ? store.get("user") : null);
            window.location.reload();

        } else {
            showNotification(response.message, "Error");
        }
    };



    const handleLogin = async (e, v) => {
        setMobile(v.mobile);
        let url = "https://api-lms.getdemos.in/students/checkmobile";
        const response = await postSubmitFormNoAuth(url, {
            mobile: v.mobile,

        });
        if (response && response.status === 1) {
            console.log(response);
            // store.set("user", response.data);
            // setUser(store.get("user") ? store.get("user") : null);
            setIsLoginOTP(response.data.otp);
            startOtpTimer("login");

        } else {
            showNotification(response.message, "Error");
        }

    };

    const handleLoginMobile = async (e, v) => {
        if (isLoginOTP == v.otp) {
            let url = "https://api-lms.getdemos.in/students/loginmobile";
            const response = await postSubmitFormNoAuth(url, { mobile: mobile });
            console.log(response)
            if (response && response.status == 1) {
                store.set("user", response.data);
                setUser(store.get("user") ? store.get("user") : null);
                console.log(response)
                setMobile(null);
                setIsLoginOTP(null);
                toast.success("Login Successful.");
                window.location.reload();
            }
        } else {
            toast.error("Invalid OTP");
        }
    };



    const handleResendLoginOTP = async (e, v) => {

        let url = "https://api-lms.getdemos.in/students/checkmobile";


        const response = await postSubmitForm(url, {
            mobile: mobile,

        });
        if (response && response.status == 1) {
            setIsLoginOTP(response.data.otp);

            startOtpTimer("login");
            toast.success("OTP resent successfully.");
        } else {
            toast.error(response.message);
        }
    };

    const responseGoogleSuccess = (response) => {
        console.log(response);
        let userInfo = {
            name: response.profileObj.name,
            emailId: response.profileObj.email,
        };
        console.log(userInfo)
    }
    // Error Handler
    const responseGoogleError = (response) => {
        console.log(response);
    };
    return (
        <div>
            <section className="donate-banner-section">
                <div className="pattern-layer-one" style={{
                    backgroundImage: `url("images/icons/icon-5.png")`
                }}></div>
                <div className="pattern-layer-two" style={{
                    backgroundImage: `url("images/images/icons/icon-6.png")`
                }}></div>
                <div className="pattern-layer-three" style={{
                    backgroundImage: `url("images/icons/icon-4.png")`
                }}></div>
                <div className="auto-container">

                    <ul className="page-breadcrumb">
                        <li><a href="/">Home</a></li>
                        <li>Login Page</li>
                    </ul>

                </div>
            </section>

            <Container>

                <Row>
                    <Col sm={6}>

                        <img src="images/background/bg.webp" />
                    </Col>

                    {

                        user ? (
                            (<>
                                <span className='profile-name'>
                                    Welcome<br /><strong> {user.name}</strong>
                                </span>

                            </>)
                        ) :
                            <Col sm={6}>
                                <div className='container'>
                                    <Tabs selectedTabClassName="show" defaultIndex={0}>
                                        <TabList className="nav nav-pills nav-fill">
                                            <Tab className="nav-item">
                                                <span className="nav-link">Sign In</span>
                                            </Tab>

                                            <Tab className="nav-item">
                                                <span className="nav-link">Register</span>
                                            </Tab>
                                        </TabList>

                                        <div className="tab-content">
                                            <TabPanel style={{ paddingTop: "2rem" }}>
                                                {!isLoginOTP && (
                                                    <Row>
                                                        <Col>
                                                            <AvForm onValidSubmit={handleLogin}>
                                                                <Row>
                                                                    <Col lg={12}>
                                                                        <AvField
                                                                            name="mobile"
                                                                            label={"Mobile *"}
                                                                            type="text"
                                                                            placeholder="Enter Mobile"
                                                                            maxLength="60"
                                                                            validate={{
                                                                                required: { value: true },
                                                                            }}
                                                                            errorMessage={
                                                                                "Mobile cannot be empty"
                                                                            }
                                                                        />
                                                                    </Col>

                                                                    <Col lg={12}>
                                                                        <div className="form-footer">
                                                                            <button
                                                                                type="submit"
                                                                                className="btn btn-outline-success"
                                                                            >
                                                                                <span>LOG IN</span>
                                                                                <i className="icon-long-arrow-right"></i>
                                                                            </button>
                                                                        </div>
                                                                        <div class="astrodivider"><div class="astrodividermask"></div><span><i>OR</i></span></div>
                                                                         {/*  <Col md={12}>

                                                                          <GoogleLogin
                                                                                clientId="911730171323-c140e29vmtf7bah0d5bhg0mmq2g5fibj.apps.googleusercontent.com"
                                                                                buttonText='Sign In With Google'
                                                                                onFailure={responseGoogleError}
                                                                                onSuccess={responseGoogleSuccess}
                                                                                cookiePolicy={'single_host_origin'}
                                                                                isSignedIn={true}

                                                                            /> 


                                                                        </Col>*/}
                                                                    </Col>
                                                                </Row>
                                                            </AvForm>
                                                        </Col>
                                                    </Row>
                                                )}
                                                {isLoginOTP && (
                                                    <Row>
                                                        <Col>
                                                            <AvForm onValidSubmit={handleLoginMobile}>
                                                                <Row>
                                                                    <Col lg={12}>
                                                                        <AvField
                                                                            name="otp"
                                                                            label={"OTP *"}
                                                                            type="text"
                                                                            maxLength={6}
                                                                            validate={{
                                                                                required: { value: true },
                                                                            }}
                                                                            errorMessage={"OTP cannot be empty"}
                                                                        />
                                                                    </Col>

                                                                    <Col lg={12}>
                                                                        <div className="form-footer">
                                                                            <button
                                                                                type="submit"
                                                                                className="btn btn-outline-primary-2"
                                                                            >
                                                                                <span>SUBMIT</span>
                                                                                <i className="icon-long-arrow-right"></i>
                                                                            </button>

                                                                            {isOtpTimer ? (
                                                                                <Label
                                                                                    className="forgot-link"
                                                                                    style={{
                                                                                        color: "#a6c76c",
                                                                                    }}
                                                                                >
                                                                                    Resend OTP in{" "}
                                                                                    <span
                                                                                        id="loginOtpTimer"
                                                                                        style={{
                                                                                            color: "green",
                                                                                            fontWeight: "bold",
                                                                                        }}
                                                                                    >
                                                                                        60
                                                                                    </span>
                                                                                </Label>
                                                                            ) : (
                                                                                <Label
                                                                                    className="forgot-link"
                                                                                    style={{
                                                                                        cursor: "pointer",
                                                                                        color: "#a6c76c",
                                                                                    }}
                                                                                    onClick={handleResendLoginOTP}
                                                                                >
                                                                                    Resend OTP
                                                                                </Label>
                                                                            )}
                                                                        </div>
                                                                    </Col>
                                                                </Row>
                                                            </AvForm>
                                                        </Col>
                                                    </Row>
                                                )}

                                            </TabPanel>
                                        <Row>
                                            <TabPanel>

                                                    <Row>
                                                        <Col>
                                                            <AvForm onValidSubmit={handleRegister}>
                                                                <Row>
                                                                    <Col lg={12}>
                                                                        <AvField
                                                                            name="name"
                                                                            label={"Name *"}
                                                                            type="text"
                                                                            validate={{
                                                                                required: {
                                                                                    value: true,
                                                                                    errorMessage: "Name cannot be empty.",
                                                                                },
                                                                            }}
                                                                        />
                                                                    </Col>
                                                                    <Col lg={12}>
                                                                        <AvField
                                                                            name="mobile"
                                                                            label={"Mobile *"}
                                                                            type="text"
                                                                            validate={{
                                                                                required: {
                                                                                    value: true,
                                                                                    errorMessage: "Mobile cannot be empty.",
                                                                                },
                                                                                number: {
                                                                                    value: true,
                                                                                    errorMessage:
                                                                                        "Mobile should be a number.",
                                                                                },
                                                                                minLength: {
                                                                                    value: 10,
                                                                                    errorMessage:
                                                                                        "Mobile should be of 10 digits.",
                                                                                },
                                                                                maxLength: {
                                                                                    value: 15,
                                                                                    errorMessage:
                                                                                        "Mobile should be of 10 digits.",
                                                                                },
                                                                            }}
                                                                        />
                                                                    </Col>
                                                                    <Col lg={12}>
                                                                        <AvField
                                                                            name="email"
                                                                            label={"Email"}
                                                                            type="email"
                                                                            errorMessage="Invalid email format."
                                                                        />
                                                                    </Col>

                                                                    <Col lg={12}>
                                                                        <div className="form-footer">
                                                                            <button
                                                                                type="submit"
                                                                                className="btn btn-outline-success"
                                                                            >
                                                                                <span>SIGN UP</span>
                                                                                <i className="icon-long-arrow-right"></i>
                                                                            </button>

                                                                        </div>
                                                                    </Col>
                                                                </Row>
                                                            </AvForm>
                                                        </Col>
                                                    </Row>


                                                    <div class="astrodivider"><div class="astrodividermask"></div><span><i>OR</i></span></div>

                                                    <Row >
                                                        {/* <Col md={12}>

                                                            <GoogleLogin
                                                                clientId="911730171323-c140e29vmtf7bah0d5bhg0mmq2g5fibj.apps.googleusercontent.com"
                                                                buttonText='Sign In With Google'
                                                                onFailure={responseGoogleError}
                                                                onSuccess={responseGoogleSuccess}
                                                                cookiePolicy={'single_host_origin'}
                                                                isSignedIn={true}

                                                            />


                                                        </Col> */}
                                                    </Row>

                                                </TabPanel>

                                            </Row>

                                        </div>

                                    </Tabs>
                                </div>
                            </Col>
                    }
                </Row>

            </Container>




        </div>





    )
}

export default RegisterLogin;