import axios from 'axios';
import React, { useRef, useState, useEffect } from 'react'
import swal from "sweetalert2";
import store from "store";
import { Form, FormGroup, Input, Label, Button, } from 'reactstrap';
import { postSubmitForm } from "../../FormHelper/Forms_helper"
import { useNavigate } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import './sendotp.css';
function Otp() {
    useEffect(() => {
        setUser(store.get("user1") ? store.get("user1") : null);
    }, []);
    const navigate = useNavigate()
    const [user, setUser] = useState(null);
    const [email, setemail] = useState()
    const [password, setpassword] = useState()

    const handleValidSubmit = async (e, v) => {
        e.preventDefault()
        let object = {
            email: email,
            pwd: password,
        }
        console.log(object);
        let url = "https://pqs3b4u48k.execute-api.ap-south-1.amazonaws.com/prod/students/login";
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
    return (


        <Form className="form" onSubmit={(e) => handleValidSubmit(e)}>
            <div className='form-inner'>

                <FormGroup className='form-group'>
                    <Label for="Email">Email</Label>
                    <Input
                        name="email"
                        label="email"
                        placeholder="Enter email"
                        type="email"
                        onChange={(e, v) => {
                            setemail(e.target.value);
                        }}
                        errorMessage="Email cannot be empty."

                    />
                </FormGroup>
                <FormGroup className='form-group'>
                    <Label for="Password" className>Password</Label>
                    <Input
                        name="pwd"
                        label="Password"
                        placeholder="Enter Password"
                        type="password"
                        errorMessage="Password cannot be empty."
                        onChange={(e, v) => {
                            setpassword(e.target.value);
                        }}
                        validate={{
                            required: { value: true },
                            pattern: {
                                value: "^[0-9a-zA-Z]+$",
                                errorMessage: (
                                    "Cannot use space/special characters."
                                ),
                            },
                        }}
                    />
                </FormGroup>
                <Row>
                
                <Col md={6}>
                <Button
                    type="submit"
                    
                    className="mr-1"
                >
                    Submit
                </Button>
                </Col>
                <Col md={6}>
                <div className="userreg_btn"><a href='/UserLogin'>Register here</a></div>
                </Col>
                </Row>
                
            </div>
 </Form>



    )
}

export default Otp;
//  import React, { Component } from "react";
//  import { Navigate } from 'react-router-dom';
//  class Otp extends Component {
//    constructor(props) {
//      super(props);
//      this.state = {
//        otp: ""
//      };
//      this.onchange = this.onchange.bind(this);
//    }
//    onchange(e) {
//      this.setState({ [e.target.name]: e.target.value });
//    }
//    performVerify = async event => {
//      event.preventDefault();

//      var data = {
//        emailid: this.props.email,
//        otp: this.state.registrationotp
//      };
//      const options = {
//        method: "POST",
//        headers: {
//          "Content-Type": "application/json",
//          Accept: "application/json"
//        },
//        body: JSON.stringify(data)
//      };
//      const url = "https://pqs3b4u48k.execute-api.ap-south-1.amazonaws.com/prod/students/checkemail";
//      try {
//        const response = await fetch(url, options);
//        const result = await response.json();
//        console.log(result);
//        if (result.data === "verified") {
//          return <Navigate to="/dashboard/" />;
//        }
//      } catch (error) {
//        console.error(error);
//      }
//    };

//    render() {
//      return (
//        <div>
//          <input
//            type="text"
//            name="otp"
//            placeholder="enter otp"
//            onChange={this.onchange}
//          />
//          <br />
//          <button type="submit" onClick={event => this.performVerify(event)}>
//            Submit
//          </button>
//          <hr />
//        </div>
//      );
//    }
//  }
//  export default Otp;
