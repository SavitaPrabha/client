import React, { useState, useEffect } from 'react'
import { Form, FormGroup, Input, Label, Button, } from 'reactstrap';
import swal from "sweetalert2";
import "./UserReg.css";
import store from "store";
import { postSubmitForm } from "../FormHelper/Forms_helper"
import { useNavigate } from 'react-router-dom';
const LoginForm = () => {
  const [username, setusername] = useState()
  const [password, setpassword] = useState()
  const [user, setUser] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    setUser(store.get("user") ? store.get("user") : null);
  }, []);


  const handleValidSubmit = async (e, v) => {
    e.preventDefault()
    let object = {
      pwd: password,
      username: username,
    }
    console.log(object);
    let url = "https://pqs3b4u48k.execute-api.ap-south-1.amazonaws.com/prod/adminusers/login";
    const response = await postSubmitForm(url, object);

    if (response && response.status === 1) {
      showNotification(response.message, "Success");
      navigate("/AdminDashboard")
      console.log(response);

      store.set("user", response.data);
      setUser(store.get("user") ? store.get("user") : null);
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
    <div>
      <div className="App">

        <Form className="form" onSubmit={(e) => handleValidSubmit(e)}>
          <div className='form-inner'>

            <FormGroup className='form-group'>
              <Label for="Email">User Name</Label>
              <Input
                name="username"
                label="Username"
                placeholder="Enter Username"
                type="text"
                onChange={(e, v) => {
                  setusername(e.target.value);
                }}
                errorMessage="Username cannot be empty."
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
            <FormGroup className='form-group'>
            <Label for="Email">Password</Label>
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
            <Button 
              type="submit"
              className="mr-1"
            >
              Submit
            </Button>
          </div>
        </Form>
        
      </div>
    </div>
  )
}

export default LoginForm;